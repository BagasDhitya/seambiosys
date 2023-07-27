import Layout from '../../components/Layout'

import Logo from "../../assets/seambiosys_hubspot.png"
import Paid from "../../assets/seambiosys_paid.png"
import Ete from "../../assets/seambiosys_ete.png"
import Low from "../../assets/seambiosys_low.png"
import Seambiosys from "../../assets/seambiosys_logo.jpeg"
import CertifiedInbound from "../../assets/certified_inbound.png"
import CertifiedHubspot from "../../assets/certified_hubspot.png"
import CertifiedRevenue from "../../assets/certified_revenue.png"
import CertifiedSoftware from "../../assets/certified_software.png"

const Hubspot = () => {
    return (
        <Layout>
            <section className='flex flex-wrap justify-center items-center my-16 grid mx-auto w-screen text-black'>
                <div className='grid grid-cols-1 text-center'>
                    <h1 className="text-4xl font-bold">Hubspot Implementation</h1>
                    <img src={Logo} alt="Logo" width={500} height={500} className='mx-auto my-6' />
                    <div className='my-14'>
                        <p>Need to orchestrate end-to-end solutions from Marketing, Sales to Service Operations?</p>
                        <p>Hubspot CRM is the best fit for your business</p>
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-x-5 text-center mt-10'>
                    <a href="#" className='p-3 bg-seambiosys-blue rounded-md text-gray-100 hover:text-white'>Visit Hubspot</a>
                    <a href="#" className='p-3 bg-seambiosys-orange rounded-md text-gray-100 hover:text-white'>Contact Sales</a>
                </div>
            </section>
            <section className='flex flex-wrap justify-center items-center my-20 grid mx-auto w-screen text-black'>
                <div className='grid grid-cols-1 gap-y-5 text-center'>
                    <h1 className="text-4xl font-bold">Why Hubspot?</h1>
                    <div className='my-20 mx-60 flex'>
                        <iframe
                            className='w-screen h-96 rounded-lg shadow-md '
                            src='https://www.youtube.com/embed/1_Oblfg_zq8?autoplay=0&rel=0&showinfo=1&controls=1'
                            title='hubspot'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-3 text-center mt-10'>
                    <div className='grid gap-y-10 mx-20'>
                        <img src={Ete} width={100} height={100} className='mx-auto' />
                        <h1 className='text-3xl font-bold'>End to end Solution</h1>
                        <p>Do you need Marketing Automation? <br />
                            Do you looking for Sales Automation? <br />
                            Do you try to keep your best SLA in Service Operation? <br />
                            Sure, hubspot can do</p>
                    </div>
                    <div className='grid gap-y-10 mx-20'>
                        <img src={Low} width={100} height={100} className='mx-auto' />
                        <h1 className='text-3xl font-bold'>Easy adoption, lower TCO</h1>
                        <p>Don't worry with minimals or low-code administrator, no need costly maintenance. <br />
                            Just as a simple like you put drag n drop everything on platform. <br />
                            Feel the lower cost of maintenance within super fast user adoption.</p>
                    </div>
                    <div className='grid gap-y-10 mx-20'>
                        <img src={Paid} width={100} height={100} className='mx-auto' />
                        <h1 className='text-3xl font-bold'>Worries free from over-paid, license seat</h1>
                        <p>Just need watch a report or monitoring KPI? worries free without paid a seat for essential feature, <br />
                            like just paid as you go.</p>
                    </div>
                </div>
            </section>
            <section className='flex flex-wrap lg:w-screen items-center my-20 text-black'>
                <div className='w-full md:w-1/2 text-center'>
                    <img
                        src={'https://storage.googleapis.com/imagelibrarystorage.pluginops.com/images/uploads/2020/04/Earning-Trust-Since-2010.png'}
                        width={400}
                        className='mx-auto rounded-md'
                    />
                </div>
                <div className='flex-1 grid grid-cols-1 gap-y-5 mr-20'>
                    <h1 className='text-4xl font-bold'>
                        Need more exploration on Hubspot in Bahasa?</h1>
                    <p>Let Seambiosys Solution Architect will handle your inquiry of Hubspot CRM in
                        Bahasa Indonesia to simplified and clarified your need on hubspot.</p>
                    <a href="/home/contact_sales" className="bg-seambiosys-orange w-60 p-3 rounded-md text-white text-center hover:text-white">
                        Contact us
                    </a>
                </div>
            </section>
            <section className='flex flex-wrap justify-center items-center my-40 grid mx-auto w-screen text-black'>
                <div className='grid grid-cols-4 gap-y-10 text-center mt-10'>
                    <div className='grid gap-y-3 mx-20'>
                        <img src={CertifiedRevenue} width={70} height={70} className='mx-auto' />
                        <h1 className='text-xl font-bold'>HubSpot Revenue Operations Certified</h1>
                    </div>
                    <div className='grid gap-y-3 mx-20'>
                        <img src={CertifiedHubspot} width={70} height={70} className='mx-auto' />
                        <h1 className='text-xl font-bold'>HubSpot Sales Software Certified</h1>
                    </div>
                    <div className='grid gap-y-3 mx-20'>
                        <img src={CertifiedSoftware} width={70} height={70} className='mx-auto' />
                        <h1 className='text-xl font-bold'>Service Hub Software Certified</h1>
                    </div>
                    <div className='grid gap-y-3 mx-20 mx-auto'>
                        <img src={CertifiedInbound} width={70} height={70} className='mx-auto' />
                        <h1 className='text-xl font-bold'>Inbound Certified</h1>
                    </div>
                </div>
            </section>
            <section className='flex flex-wrap lg:mx-40 lg:w-max items-start mt-60 text-black'>
                <div className='flex-1 grid gap-y-5 mx-auto'>
                    <h1 className='text-3xl text-center font-semibold'>Need anything to discuss about Hubspot <br /> with best tailor-made solution from Seambiosys?</h1>
                    <a href="/home/contact_sales" className="bg-seambiosys-orange w-60 p-3 rounded-md mx-auto text-white text-center hover:text-white">
                        Contact Us
                    </a>
                    <div className='flex grid grid-cols-3 gap-x-28 mt-20'>
                        <div className='w-72 grid gap-y-10'>
                            <img width={500} src={Seambiosys} className='mx-auto' />
                        </div>
                        <div className='w-72 grid gap-y-3'>
                            <h1 className='text-2xl font-bold'>PT Kusuma Technology Systema</h1>
                            <p className='w-max'>The Orchard Residence Block C1,
                                Pamegarsari, Parung, Bogor, West Java <br />
                                Postal Code 16330</p>
                            <a href='mailto:support@seambiosys.com' className='w-max text-seambiosys-orange hover:text-orange-700'>support@seambiosys.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>


    )
}

export default Hubspot