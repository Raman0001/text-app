import React from 'react'
import { Image} from "@nextui-org/react";

const Navbar = (props) => {
    return (
        <header className="text-gray-600 body-font">
            <div className="flex flex-wrap laptop:inline-grid laptop:grid-cols-3 gap-4 justify-items-center items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        className=" p-2 h-12 w-12 rounded-none"
                        alt="NextUI hero Image"
                        src={`Texticon${props.T}.png`}
                    />
                    <span className="ml-3 text-xl">Text Correct App</span>
                </div>
                
            </div>
        </header>
    )
}

export default Navbar
