import Layout from '../../components/Layout';

import Logo from "../../assets/seambiosys_logo.jpeg"
import Query from "../../assets/seambiosys_google_query.png"
import Etl from "../../assets/seambiosys_etl.webp"
import Erp from "../../assets/seambiosys_erp.png"
import Hubspot from "../../assets/seambiosys_hubspot.png"
import Meeting from "../../assets/seambiosys_meeting.jpeg"
import Cost from "../../assets/seambiosys_money.png"
import Effective from "../../assets/seambiosys_leverage.png"
import Time from "../../assets/seambiosys_reduce_time.png"
import ComingSoon from "../../assets/seambiosys_coming_soon.png"

import data from "../../datas/home.json"

const Home = () => {
    return (
        <Layout>
            <section className='flex flex-wrap lg:mx-40 mx-10 lg:w-max items-center my-5 lg:my-20 text-black'>
                <div className='flex-1 grid gap-y-5 mx-auto'>
                    <h1 className='text-4xl font-bold'>{data?.section_1?.title}</h1>
                    <p className='text-lg'>{data?.section_1.subtitle}</p>
                    <p>{data?.section_1.description}</p>
                    <a href="/home/contact_sales" className="bg-seambiosys-orange w-40 p-3 rounded-md text-white text-center hover:text-white">
                        Contact Us
                    </a>
                </div>
                <div className='w-full md:w-1/2 lg:mt-0 mt-10 text-center'>
                    <img
                        src="https://storage.googleapis.com/imagelibrarystorage.pluginops.com/images/uploads/2020/04/Header.png"
                        width={400}
                        className='mx-auto'
                    />
                </div>
            </section>
            <section className='flex flex-wrap lg:mx-40 lg:w-max items-start my-40 text-black'>
                <div className='flex-1 grid gap-y-5 mx-auto'>
                    <h1 className='text-4xl text-center font-bold'>Seambiosys 3 fundamentals commitment</h1>
                    <div className='flex grid lg:grid-cols-3 lg:gap-y-0 lg:mx-0 mx-16 gap-y-14 gap-x-28 mt-20'>
                        <div className='w-72 grid'>
                            <img width={70} src={Time} className='mx-auto' />
                            <h1 className='text-2xl text-center text-seambiosys-orange'>Reduce contraint of time</h1>
                            <p className='text-center'>Our best class solution architect will guide the project with good project management planning, reduce time constraint with effective timeline is our fundamentals commitment</p>
                        </div>
                        <div className='w-72 grid'>
                            <img width={70} src={Effective} className='mx-auto' />
                            <h1 className='text-2xl text-center text-seambiosys-orange'>Leverage effectiveness on project scoping</h1>
                            <p className='text-center'>In every our project, there will be any option for customer to define based on their need. We are custom-tailor made come with expert in-field solution.</p>
                        </div>
                        <div className='w-72 grid gap-y-5'>
                            <img width={70} src={Cost} className='mx-auto' />
                            <h1 className='text-2xl text-center text-seambiosys-orange'>Cost effective project management</h1>
                            <p className='text-center'>Cost is a relative, but we can assure you have to pick match solution, with good scope and proper timeline we will go with the best cost as we can provide for you!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-wrap lg:w-screen items-center my-20 text-black'>
                <div className='w-full md:w-1/2 text-center'>
                    <img
                        src={Meeting}
                        width={400}
                        className='mx-auto rounded-md'
                    />
                </div>
                <div className='flex-1 grid grid-cols-1 lg:mx-0 lg:my-0 my-10 mx-10 gap-y-5 mr-20'>
                    <h1 className='text-4xl font-bold'>
                        Yes! We also stand for high growth SMe's & Start-up!</h1>
                    <p className='text-lg'>Seambiosys ~ Seamless Business Operation Integrated System</p>
                    <p>Our vision and mission become a part of acceleration in digital economic and digital industry on Indonesia & APAC, we have best solution and come in best price for your Small-Medium Enterprise and Start-up</p>
                    <a href="/home/contact_sales" className="bg-seambiosys-orange w-60 p-3 rounded-md text-white text-center hover:text-white">
                        SME's & Startup Program
                    </a>
                </div>
            </section>
            <section className='flex flex-wrap lg:mx-40 mx-5 lg:w-max items-start lg:my-40 my-0 text-black'>
                <div className='flex-1 grid gap-y-5 mx-auto'>
                    <h1 className='text-4xl text-center font-bold'>Our Services</h1>
                    <p className='text-2xl text-center'>Deep dive with our provided service here</p>
                    <a href="/home/contact_sales" className="bg-seambiosys-orange w-60 p-3 rounded-md mx-auto text-white text-center hover:text-white">
                        Explore More
                    </a>
                    <div className='flex grid lg:grid-cols-3 lg:mx-0 mx-10 gap-x-28 lg:gap-y-0 gap-y-20 mt-20'>
                        <div className='w-72 border rounded-md shadow-md p-10 grid gap-y-10'>
                            <img width={150} src={Hubspot} className='mx-auto' />
                            <h1 className='text-2xl text-center text-seambiosys-orange'>HubSpot CRM</h1>
                            <p className='text-center'>One stop solution for your Marketing, Sales & Service.</p>
                        </div>
                        <div className='w-72 border rounded-md shadow-md p-10 grid gap-y-10'>
                            <img width={100} src={Erp} className='mx-auto' />
                            <img width={100} src={ComingSoon} className='my-96 absolute' />
                            <h1 className='text-2xl text-center text-seambiosys-orange'>Custom-tailored ERP solution</h1>
                            <p className='text-center'>We provide custom-tailored ERP, do you need Accounting module? Order Management module? or Invoice module? yes, you can tell us what you need.</p>
                        </div>
                        <div className='w-72 border rounded-md shadow-md p-10 grid gap-y-10'>
                            <img width={200} src={Etl} className='mx-auto' />
                            <img width={100} src={ComingSoon} className='lg:my-96 my-80 absolute' />
                            <h1 className='text-2xl text-center text-seambiosys-orange'>ETL Process Consulting</h1>
                            <p className='text-center'>Have a constraint on data extraction, transform and loading? Our ETL Engine ready to help you.</p>
                        </div>
                        <div className='w-72 border rounded-md shadow-md p-10 grid gap-y-10 mt-10'>
                            <img width={150} src={Query} className='mx-auto' />
                            <img width={100} src={ComingSoon} className='my-96 absolute' />
                            <h1 className='text-2xl text-center text-seambiosys-orange'>Google Bigquery Data Warehouse</h1>
                            <p className='text-center'>Looking for seamless cloud data warehouse to unified your data? We also helping company to better understanding about they data using data warehouse</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-wrap lg:mx-40 lg:w-max items-start text-black'>
                <div className='flex-1 grid gap-y-5 mx-auto lg:my-0 my-20'>
                    <h1 className='text-4xl text-center font-bold'>Have a Project to Discuss?</h1>
                    <p className='text-2xl text-center'>Join Here!</p>
                    <a href="/home/contact_sales" className="bg-seambiosys-orange w-60 p-3 rounded-md mx-auto text-white text-center hover:text-white">
                        Contact Us
                    </a>
                    <div className='flex grid lg:grid-cols-3 gap-x-28 mt-20'>
                        <div className='w-72 grid gap-y-10'>
                            <img width={500} src={Logo} className='mx-auto' />
                        </div>
                        <div className='w-72 grid lg:gap-y-3 gap-y-5 lg:mt-0 mt-10 lg:mx-0 mx-10'>
                            <h1 className='text-2xl font-bold'>PT Kusuma Technology Systema</h1>
                            <p className='lg:w-max'>The Orchard Residence Block C1,
                                Pamegarsari, Parung, Bogor, West Java <br />
                                Postal Code 16330</p>
                            <a href='mailto:support@seambiosys.com' className='w-max text-seambiosys-orange hover:text-orange-700'>support@seambiosys.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
