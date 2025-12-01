function LoginForm() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">

                <form>
                    <div className="space-y-4">
                        <>
                            <h1 className="text-center">
                                <span className="text-2xl font-bold text-[#340C9D]">Sign In</span>
                            </h1>
                            <h4 className="text-center font-bold text-[#340C9D]" >
                                Welcome back!
                            </h4>
                        </>


                        {/* Email */}
                        <div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-[#340C9D]" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>

                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm 
                             focus:ring-[#340C9D] focus:border-[#340C9D]"
                                    placeholder="you@email.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                           

                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-[#340C9D]" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>

                                <input
                                    id="password"
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm
                             focus:ring-blue-500 focus:border"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#340C9D] text-white rounded-md hover:bg-[#340C9D]
                         focus:ring-2 focus:ring-offset-2 focus:ring-[#340C9D]"
                        >
                            Sign in
                        </button>

                    </div>
                </form>

                {/* Divider */}
                <div className="mt-6 flex items-center">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-2 text-sm text-[#340C9D]">Or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Social Login */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="border py-2 rounded-md bg-white shadow-sm text-sm hover:bg-gray-50">
                        Google
                    </button>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a className="text-[#340C9D] hover:text-[#340C9D]">Sign In</a>
                </p>

            </div>
        </div>
    );
}

export default LoginForm;
