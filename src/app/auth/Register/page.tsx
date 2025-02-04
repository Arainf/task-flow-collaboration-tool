import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function Register(){
    return (
        <>
        <div className="flex flex-row w-screen h-screen bg-white p-20 gap-8">
            
            {/*Register form*/}
            <div className="flex flex-col flex-1 items-center self-center gap-3">
                <h1 className="text-6xl font-bold mb-2">Join Now!</h1>
                    <p className="text-gray-600 mb-6">
                        Sign up for <b>TaskFlow</b> and take your team’s productivity to the next level.
                    </p>
                    <form className="flex flex-col items-stretch gap-6 mt-6 w-1/2">
                        <Input type="text" placeholder="Full Name" className="border border-black p-3 rounded-full"></Input>
                        <Input type="email" placeholder="Email Address" className="border border-black p-3 rounded-full"></Input>
                        <Input type="password" placeholder="Password" className="border border-black p-3 rounded-full"></Input>
                        <Input type="password" placeholder="Confirm Password" className="border border-black p-3 rounded-full"></Input>
                        <Button className="bg-black text-white py-3 rounded-full w-full">Sign up</Button>
                    </form>
                    {/* Divider */}
                    <div className="flex items-center my-4 w-1/2">
                        <div className="flex-1 border-b border-black"></div>
                        <p className="text-sm text-black px-2"><b>or continue with</b></p>
                        <div className="flex-1 border-b border-black"></div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <button className="p-3 border border-gray-300 rounded-full">
                        <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                        </button>
                        <button className="p-3 border border-gray-300 rounded-full">
                        <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
                        </button>
                    </div>

                    <p className="text-gray-600 mt-4 text-sm">
                        Already a member? <a href="#" className="text-black font-semibold">Log in here.</a>
                    </p>

            </div>

            <div className="w-full h-full flex-1 bg-slate-800">

            </div>



        </div>
            
            </>
    )
}