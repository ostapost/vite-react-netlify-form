export const Form = () => {
    return (
        <form
            name="contact"
            method="post"
            data-netlify="true"
        >
            <input
                type="hidden"
                name="form-name"
                value="contact"
            />
            <p>
                <label htmlFor="name">Name </label> <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                />
            </p>
            <p>
                <label htmlFor="last-name">Last Name </label> <br />
                <input
                    type="text"
                    id="last-name"
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
                <label htmlFor="message2">Message </label> <br />
                <textarea
                    id="message"
                    name="message"
                ></textarea>
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
