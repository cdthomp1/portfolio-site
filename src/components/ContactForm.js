import React, { useReducer } from "react";
import * as EmailValidator from "email-validator";
import submitReducer, { SUBMIT_ACTIONS } from "../reducers/SubmitReducer";

const initialState = {
    errMsg: "",
    email: "",
    name: "",
    body: "",
    successMsg: "",
    loading: false,
};

export default function ContactForm(props) {
    const [state, dispatch] = useReducer(submitReducer, initialState);
    const { errMsg, email, name, subject, body, successMsg, loading } = state;

 

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = async e => {
        e.preventDefault();

        let error;
        if (!name) {
            error = "Please include your name";
        } else if (!EmailValidator.validate(email)) {
            error = "Please enter a valid email";
        } else if (!subject) {
            error = "What is this message about?"
        }
        else if (!body) {
            error = "Don't forget to write a message!";
        }
        if (error) {
            return dispatch({ type: SUBMIT_ACTIONS.ERROR, msg: error });
        }

        try {
            dispatch({ type: SUBMIT_ACTIONS.SUBMITTING });
            const res = await fetch("/success", {
                method: "post",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    email,
                    name,
                    subject,
                    body,
                }),
            });
            if (res.status === 200) {
                const msg = props.successMsg || "Thanks for reaching out!";
                dispatch({ type: SUBMIT_ACTIONS.SUCCESS, msg });
            } else {
                const msg = "Ooops... something went wrong.";
                dispatch({ type: SUBMIT_ACTIONS.ERROR, msg });
            }
        } catch (ex) {
            const msg = "Ooops... something went wrong 2.";
            dispatch({ type: SUBMIT_ACTIONS.ERROR, msg });
        }
    };

    return (
        <>
            {successMsg && <h2 className="h2 text-center">{successMsg}</h2>}
            {!successMsg && (
                <form onSubmit={handleSubmit} id="contact-form">

                    <label>Name</label>
                    <input className="input-field" type="text" name="name" required onChange={e =>
                        dispatch({
                            type: SUBMIT_ACTIONS.FIELD,
                            target: "name",
                            value: e.target.value,
                        })
                    }
                        value={name} />

                    <label>Subject</label>
                    <input className="input-field" type="text" name="subject" required onChange={e =>
                        dispatch({
                            type: SUBMIT_ACTIONS.FIELD,
                            target: "subject",
                            value: e.target.value,
                        })
                    }
                        value={subject}
                    />

                    <label>Email</label>
                    <input className="input-field" type="text" name="email" required onChange={e =>
                        dispatch({
                            type: SUBMIT_ACTIONS.FIELD,
                            target: "email",
                            value: e.target.value,
                        })
                    }
                        value={email} />

                    <label>Message</label>
                    <textarea className="input-field" name="message" required
                        onChange={e =>
                            dispatch({
                                type: SUBMIT_ACTIONS.FIELD,
                                target: "body",
                                value: e.target.value,
                            })
                        }
                        value={body}
                    ></textarea>

                    <button type="submit" className="btn" id="submit-btn">
                        {loading ? <div className="loader" /> : "Submit"}
                    </button>

                    {errMsg && (
                        <p className="error">
                            <small>{errMsg}</small>
                        </p>
                    )}
                </form>
            )}
        </>
    );
}