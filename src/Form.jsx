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
                <label htmlFor="name1">Name Hyu</label> <br />
                <input
                    type="text"
                    id="name1"
                    name="name1"
                />
            </p>
            <p>
                <label htmlFor="email3">Email Hyu</label> <br />
                <input
                    type="email"
                    id="email3"
                    name="email3"
                />
            </p>
            <p>
                <label htmlFor="message2">Message Hyu</label> <br />
                <textarea
                    id="message2"
                    name="message2"
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
