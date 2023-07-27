import Layout from '../../components/Layout'

import Seambiosys from "../../assets/seambiosys_logo.jpeg"

const Contact = () => {

    return (
        <Layout>
            <iframe
                src="https://share.hsforms.com/1oTEe0n9mSBS9vpwFMLTpCwebwmu"
                title="HubSpot Form"
                className="w-screen h-screen"
            ></iframe>
            <section className='flex flex-wrap lg:mx-40 lg:w-max items-start'>
                <div className='flex-1 grid gap-y-5 mx-auto'>
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

export default Contact