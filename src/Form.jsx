export const Form = () => {
    const obj = {
        first: 1,
        second: 2,
    };
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
                <label htmlFor="name">INFO</label> <br />
                <p>Якісь покупки ! </p>
                <hr />
                <p>Перша</p>
                <hr />
                <p>Друга</p>
                <hr />
                <p>Третя</p>
                <hr />
                <textarea
                    // type="hidden"
                    value={obj.first}
                    // required
                />
            </p>
            <p>
                <label>Last Name</label> <br />
                <input
                    type="text"
                    id="email"
                    name="Last"
                    // required
                />
            </p>
            {/* <p>
                <label htmlFor="message">Message</label> <br />
                <textarea
                    id="message"
                    name="message"
                    // required
                ></textarea>
            </p> */}
            <p>
                <input
                    type="submit"
                    value="Відправити покупки на Пошту"
                />
            </p>
        </form>
    );
};
