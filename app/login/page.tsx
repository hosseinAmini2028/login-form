import LoginForm from "components/LoginForm";

export default function LoginPage(){
    return (
        <div className="flex items-center justify-center  w-screen h-screen">
            <div className="max-w-3xl w-full flex justify-between bg-[#eeedf3] rounded-3xl p-1">
                <div className="hidden flex-1 md:block min-h-[600px] bg-[#d797f8] rounded-3xl h-full"></div>
                <div className="flex-1 flex gap-2 flex-col items-center justify-center">
                   <h2 className="font-semibold text-2xl">Hello Again!</h2>
                   <p className="text-base mb-5">Wellcome back you've been missed!</p>
                   <LoginForm />
                </div>
            </div>
        </div>
    )
}