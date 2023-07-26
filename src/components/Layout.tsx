import React, { useState, useEffect } from 'react';
import SeambiosysLogo from "../assets/seambiosys_logo.jpeg";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    return (
        <div className="min-h-screen lg:w-screen bg-white flex flex-col items-center">
            <nav className="w-screen h-full shadow-md">
                <div className="m-5 flex items-center justify-between">
                    <div className="flex items-center gap-x-10">
                        <img src={SeambiosysLogo} width={200} height={200} />
                        <div className={`flex gap-x-10 ${isMobileOrTablet && ('hidden')}`}>
                            <a href="#home" className="text-seambiosys-blue hover:text-seambiosys-orange">
                                Home
                            </a>
                            <a href="#hubspot" className="text-seambiosys-blue hover:text-seambiosys-orange">
                                HubSpot CRM
                            </a>
                        </div>
                    </div>
                    <div>
                        {isMobileOrTablet ? (
                            <button
                                onClick={toggleMenu}
                                className={`lg:hidden text-seambiosys-blue hover:text-seambiosys-orange ${showMenu ? 'hidden' : ''}`}
                            >
                                Menu
                            </button>
                        ) : (
                            <a href="#contact" className="bg-seambiosys-orange p-3 px-10 rounded-md text-white">
                                Contact Sales
                            </a>
                        )}
                    </div>
                </div>
                {showMenu && isMobileOrTablet && (
                    <div className="lg:hidden flex flex-col gap-y-2 items-center bg-white text-white py-2 my-4">
                        <a href="#home" className="text-seambiosys-blue hover:text-seambiosys-orange">
                            Home
                        </a>
                        <a href="#hubspot" className="text-seambiosys-blue hover:text-seambiosys-orange">
                            HubSpot CRM
                        </a>
                        <a href="#contact" className="text-white rounded-md bg-seambiosys-orange p-3">
                            Contact Sales
                        </a>
                    </div>
                )}
            </nav>
            <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4 py-8">
                {children}
            </div>
        </div>
    );
};

export default Layout;
