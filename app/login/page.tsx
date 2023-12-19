'use client'
import Image from "next/image"
import { Nunito } from "next/font/google"

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '600', '700']
})

function showPassword(){
    const passwordField = document.getElementById('password')
    passwordField?.attributes[0].value === "password" ? passwordField.setAttribute("type", "text") : passwordField?.setAttribute("type", "password")
}

export default function Login(){
    return  (
        <main className="h-screen w-full flex bg-white flex-row-reverse justify-center items-center">
            <div className="form-container">
                <form action="/" method="POST" className="flex flex-col">
                    <div className="logo-container flex items-center justify-center mb-12">
                        <Image src="/assets/icons/logo.svg" width={238} height={61} alt="" className="" />
                    </div>
                    <label htmlFor="email" className={`${nunito.className} text-xs text-charcoalGray mb-3`}>Email Address or Phone Number</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" className={`py-4 pl-4 w-80 bg-cloudGray rounded-md placeholder:${nunito.className} placeholder:text-sm placeholder:text-darkCloudGray`}/>
                    <label htmlFor="password" className={`${nunito.className} text-xs text-charcoalGray mb-2 mt-6`}>Password</label>
                    <div className="password-container relative mb-12">
                        <input type="password" name="password" id="password" placeholder="Enter your Password" className={`py-4 pl-4 w-80 bg-cloudGray rounded-md placeholder:${nunito.className} placeholder:text-sm placeholder:text-darkCloudGray pash`}/>
                        <div className="show-pass absolute top-5 right-5 cursor-pointer" onClick={() => showPassword()}>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.02564 0.195857C0.9145 0.30924 0.846925 0.459558 0.835203 0.619478C0.823481 0.779399 0.868391 0.938302 0.961766 1.06729L1.02564 1.1423L4.55543 4.74501C2.83431 5.97594 1.60567 7.79866 1.09477 9.87899C1.05537 10.0502 1.0836 10.2304 1.17335 10.3806C1.26309 10.5308 1.40715 10.639 1.57439 10.6816C1.74163 10.7243 1.91861 10.6982 2.0671 10.6088C2.21558 10.5194 2.32363 10.374 2.36791 10.204C2.82195 8.35755 3.94021 6.75302 5.50044 5.70931L7.08421 7.3254C6.45157 7.99995 6.10296 8.90048 6.11305 9.8341C6.12314 10.7677 6.49113 11.6602 7.1382 12.3203C7.78526 12.9805 8.65994 13.3558 9.57489 13.366C10.4898 13.3761 11.3723 13.0202 12.0333 12.3746L17.2124 17.6603C17.3295 17.7801 17.4867 17.8503 17.6525 17.8566C17.8182 17.863 17.9801 17.8051 18.1057 17.6946C18.2313 17.5841 18.3112 17.4292 18.3294 17.261C18.3476 17.0928 18.3027 16.9238 18.2038 16.788L18.1399 16.713L12.791 11.254L12.7919 11.2522L6.71058 5.05037L6.71233 5.04859L5.72094 4.03965L1.95315 0.195857C1.8301 0.0704532 1.66331 1.52588e-05 1.4894 1.52588e-05C1.31549 1.52588e-05 1.14869 0.0704532 1.02564 0.195857ZM9.58323 3.12446C8.70822 3.12446 7.85946 3.2566 7.05533 3.50393L8.13772 4.60751C10.0098 4.22925 11.9528 4.59955 13.5649 5.64183C15.1771 6.68412 16.335 8.31868 16.7994 10.2076C16.8448 10.3763 16.953 10.5202 17.1009 10.6085C17.2489 10.6968 17.4249 10.7225 17.5912 10.6802C17.7575 10.6379 17.901 10.5308 17.9909 10.3819C18.0809 10.233 18.1102 10.0541 18.0726 9.88346C17.5981 7.9526 16.505 6.23883 14.967 5.01428C13.4289 3.78972 11.5341 3.12458 9.58323 3.12446ZM9.75386 6.25842L13.0798 9.65131C13.0367 8.7655 12.6725 7.92765 12.0578 7.30059C11.4432 6.67354 10.622 6.30209 9.75386 6.25842Z" fill="#ABABAB"/>
                            </svg>
                        </div>
                    </div>
                    <a href="/" className={`${nunito.className} text-linkBlue text-sm font-semibold mb-6`}>Forgot Password ?</a>
                    <div className="login-options text-center">
                        <input type="submit" value="Login" className={`w-80 bg-linkBlue text-white py-4 rounded-full mb-4`} />
                        <p className={`${nunito.className} font-bold text-sm text-realllyDarkBlue mb-5`}>or</p>
                        <div className="google border border-solid border-realllyDarkBlue rounded-full flex justify-between mb-8">
                            <Image src="/assets/icons/google.svg" width={20} height={20} alt="Google Logo" className="ml-5" />
                            <a href="/" className="py-4 pr-16">Continue with Google</a>
                        </div>
                    </div>
                    <div className={`${nunito.className} text-sm flex justify-between `}>
                        <p className="text-black font-semibold">Don't have an account yet?</p>
                        <a href="/" className="text-linkBlue font-semibold">Register</a>
                    </div>
                </form>
            </div>
            <div className="svg-container hidden md:flex">
                <Image src="/assets/icons/login-illustration.svg" alt="login illustration" width={608} height={456} className="mr-40"/>
            </div>
        </main>
    )
}