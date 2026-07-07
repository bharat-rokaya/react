const Login = () => {
    return (
        <div className="bg-white w-87.5 h-auto p-8 flex-col items-center justify-center rounded-2xl shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-center">
                Customer Login
            </h1>
            <div class="w-full flex-col">
                <label for="email" className="text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full outline-1 outline-gray-600 focus:outline-fuchsia-600 mt-1 mb-3 px-2 py-1.5 rounded-md"
                    required
                />
                <p
                    id="email-error"
                    className="text-red-500 text-sm mb-1 -translate-y-1.5"
                ></p>

                <label for="password" className="text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full outline-1 outline-gray-600 focus:outline-fuchsia-600 mt-1 px-2 py-1.5 rounded-md"
                    required
                />
                <i
                    className="fa-solid fa-eye text-gray-600 cursor-pointer -translate-y-7.5 translate-x-65"
                    id="togglePassword"
                ></i>
                <p
                    id="password-error"
                    className="text-red-500 text-sm mt-1 -translate-y-1.5"
                ></p>

                <button
                    type="submit"
                    id="login"
                    className="w-full bg-fuchsia-500 text-white mt-4 py-1.5 x-4 cursor:pointer transition-scale duration-200 ease rounded-md hover:scale-102 hover:bg-fuchsia-600"
                >
                    Login
                </button>
            </div>
            <p class="text-sm text-center mt-4">
                Don't have an account?
                <a
                    href="register.html"
                    target="_blank"
                    class="text-fuchsia-600 hover:underline"
                >
                    Create one here.
                </a>
            </p>
        </div>
    );
};

export default Login;
