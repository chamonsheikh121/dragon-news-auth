

const FormEP = () => {
    return (
        <div>
            <div className="py-4 space-y-4">
                <label className="text-xl text-white py-4" htmlFor="email">Email Address:</label>
                <input className="w-full text-xl p-3 rounded-sm" type="email" name="email" id="email" />
            </div>
            <div className="py-4 space-y-4">
                <label className="text-xl text-white py-4" htmlFor="email">Password:</label>
                <input className="w-full text-xl p-3 rounded-sm" type="password" name="password" id="email" />
            </div>

        </div>
    );
};

export default FormEP;