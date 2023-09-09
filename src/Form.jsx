export const Form = () => {
    return (
        <form
            name="contact 1"
            method="post"
            data-netlify="true"
            onSubmit="submit"
        >
            <input
                type="hidden"
                name="form-name"
                value="contact v1"
            />
            <p>
                <label> First Name </label> <br />
                <input
                    type="text"
                    name="first-name"
                />
            </p>
            <p>
                <label>Last Name </label> <br />
                <input
                    type="text"
                    name="last-name"
                />
            </p>
            <p>
                <label htmlFor="email">Email </label> <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                />
            </p>
            <p>
                <label>Message </label> <br />
                <textarea name="message"></textarea>
            </p>
            <p>
                <input
                    type="submit"
                    value="Submit message"
                />
            </p>
        </form>
    );
};
