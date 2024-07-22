
import uicon from "../images/uicoon.png"

import ticon from "../images/ticon.png"

import axios from "axios"

import { useState, useEffect } from "react"

function Db() {

    const [data, set_data] = useState({});
    const [users, set_users] = useState({});
    const [coupons, set_coupons] = useState({});

    useEffect(() => {
        axios.get("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/Events.json")
            .then(res => (set_data(res.data)))
            .catch(err => (err))
    }, []);

    useEffect(() => {
        axios.get("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/users.json")
            .then(res => (set_users(res.data)))
            .catch(err => (err))
    }, []);

    useEffect(() => {
        axios.get("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/coupons.json")
            .then(res => (set_coupons(res.data)))
            .catch(err => (err))
    }, []);

    function home_handle() {
        document.getElementById("home").style.display = "block";
        document.getElementById("users").style.display = "none";
        document.getElementById("events").style.display = "none";
        document.getElementById("feedback").style.display = "none";
    }


    function users_handle() {
        document.getElementById("home").style.display = "none";
        document.getElementById("users").style.display = "block";
        document.getElementById("events").style.display = "none";
        document.getElementById("feedback").style.display = "none";
    }


    function events_handle() {
        document.getElementById("home").style.display = "none";
        document.getElementById("users").style.display = "none";
        document.getElementById("events").style.display = "block";
        document.getElementById("feedback").style.display = "none";
    }


    function feedback_handle() {
        document.getElementById("home").style.display = "none";
        document.getElementById("users").style.display = "none";
        document.getElementById("events").style.display = "none";
        document.getElementById("feedback").style.display = "block";
    }



    function add_form_handle() {
        document.getElementById("add_form").style.display = "block";

        document.getElementById("home").style.filter = "blur(5px)";
        document.getElementById("users").style.filter = "blur(5px)";
        document.getElementById("events").style.filter = "blur(5px)";
        document.getElementById("feedback").filter = "blur(5px)";
        // document.getElementById("nav").filter = "blur(5px)";


    }

    function coupon_add_form() {
        document.getElementById("coupon_add_form").style.display = "block";
        document.getElementById("add_form").style.display = "none";

        document.getElementById("home").style.filter = "blur(5px)";
        document.getElementById("users").style.filter = "blur(5px)";
        document.getElementById("events").style.filter = "blur(5px)";
        document.getElementById("feedback").filter = "blur(5px)";
        // document.getElementById("nav").filter = "blur(5px)";


    }

    function cancel_handle() {
        document.getElementById("add_form").style.display = "none";
        document.getElementById("update_form").style.display = "none";
        document.getElementById("coupon_add_form").style.display = "none";

        document.getElementById("home").style.filter = "blur(0px)";
        document.getElementById("users").style.filter = "blur(0px)";
        document.getElementById("events").style.filter = "blur(0px)";
        document.getElementById("feedback").filter = "blur(0px)";
        // document.getElementById("nav").filter = "blur(0px)";


    }

    function add_handle() {
        axios.put("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/Events/" + data.length + ".json",
            {

                description: document.getElementById("e_desc").value,
                endDate: document.getElementById("e_end_date").value,
                id: data.length,
                image: document.getElementById("e_image").value,
                isDeleted: false,
                location: document.getElementById("e_location").value,
                name: document.getElementById("e_name").value,
                numTickets: document.getElementById("e_quantity").value,
                price: document.getElementById("e_price").value,
                startDate: document.getElementById("e_start_date").value

            }
        )
            .catch(err => (err))

        alert("Event posted successfully !!!");
    }

    function add_coupon() {
        axios.put("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/coupons/" + document.getElementById("coupon_id").value + ".json",
            {
                id: document.getElementById("coupon_id").value,
                discount: document.getElementById("coupon_discount").value,
                is_deleted: false
            }
        )
            .catch(err => (err))

        alert("Coupon posted successfully !!!");
    }


    // const [s_event, set_s_event] = useState([]);

    function update_form_handle() {




        document.getElementById("update_form").style.display = "block";

        document.getElementById("home").style.filter = "blur(5px)";
        document.getElementById("users").style.filter = "blur(5px)";
        document.getElementById("events").style.filter = "blur(5px)";
        document.getElementById("feedback").filter = "blur(5px)";
        // document.getElementById("nav").filter = "blur(5px)";

    }


    function select_event_handle(id) {



        axios.get("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/Events/" + id + ".json")
            .then(res => (set_s_event(res.data)))
            .catch(err => (err))

        document.getElementById("e_name_u").value = data[id].name;
        document.getElementById("e_price_u").value = data[id].price;
        document.getElementById("e_start_date_u").value = data[id].startDate;
        document.getElementById("e_location_u").value = data[id].location;
        document.getElementById("e_quantity_u").value = data[id].numTickets;
        document.getElementById("e_end_date_u").value = data[id].endDate;
        document.getElementById("e_image_u").value = data[id].image;
        document.getElementById("e_desc_u").value = data[id].description;



        sessionStorage.setItem("event_id", JSON.stringify(id));
        // alert(data[id].name);
    }

    let eid = sessionStorage.getItem("event_id");


    function update_handle(id, e) {
        // e.preventDefault();


        axios.put(`https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/Events/${id}.json`,
            {
                description: document.getElementById("e_desc_u").value,
                endDate: document.getElementById("e_end_date_u").value,
                id: parseInt(id),
                image: document.getElementById("e_image_u").value,
                isDeleted: false,
                location: document.getElementById("e_location_u").value,
                name: document.getElementById("e_name_u").value,
                numTickets: document.getElementById("e_quantity_u").value,
                price: document.getElementById("e_price_u").value,
                startDate: document.getElementById("e_start_date_u").value
            }
        )
            .catch(err => (err))

        alert("Event updated successfully !!!");
    }



    function delete_handle(id) {
        axios.patch("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/Events/" + id + ".json",
            {
                isDeleted: true
            }
        )
            .catch(err => (err))
        alert("Event deleted successfully !!!");
    }


    function coupon_delete_handle(id) {
        axios.patch("https://project-4-bbf17-default-rtdb.europe-west1.firebasedatabase.app/coupons/" + id + ".json",
            {
                is_deleted: true
            }
        )
            .catch(err => (err))

        alert("Coupon deleted successfully !!!");
    }

    function activate_handle(id) {
        document.getElementById("status").style.backgroundColor = "red";

        if (id.active == "active") {
            set_data(...users[id], users[id].ac);
        }


    }


    return (

        <div className=" relative ">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />


            <aside id="nav" className="fixed top-0 left-0 flex-col w-64 h-full bg-[#0F041C] p-4 ">
                <div className="flex items-center pb-4 border-b border-b-gray-200 h-[10%]">
                    {/* <img src={logo} alt="" className="h-auto w-[60px]  rounded object-cover" /> */}
                    <span className="text-lg font-bold text-gray-200 ml-3"><span className="text-[#9cdbff] text-xl">G<span className="text-[#ffffff]">Tickets</span></span></span>
                </div>

                <ul className="mt-4 mb-1 group active h-[80%]">
                    {/* group-[.active]:text-[#000000] group-[.active]:bg-[#90909083] */}
                    <li className="flex items-center py-2 px-4 text-gray-200 mb-2  hover:bg-[#0d0b2a] hover:text-[#bee7ff] rounded-[10px]  "
                        onClick={home_handle}
                    >
                        <i class="ri-home-2-line mr-3 text-lg"></i>
                        <span className="text-sm">Dashboard</span>
                    </li>

                    <li className="flex items-center py-2 px-4 text-gray-200 mb-2 hover:bg-[#0d0b2a] hover:text-[#bee7ff] rounded-[10px]"
                        onClick={users_handle}>
                        <i class="ri-group-line mr-3 text-lg"></i>
                        <span className="text-sm">Users</span>
                    </li>


                    <li className="flex items-center py-2 px-4 text-gray-200 mb-2 hover:bg-[#0d0b2a] hover:text-[#bee7ff] rounded-[10px]"
                        onClick={events_handle}>
                        <i class="ri-calendar-event-fill mr-3 text-lg"></i>
                        <span className="text-sm">Events</span>
                    </li>


                    <li className="flex items-center py-2 px-4 text-gray-200 mb-2 hover:bg-[#0d0b2a] hover:text-[#bee7ff] rounded-[10px]"
                        onClick={feedback_handle}>
                        <i class="ri-feedback-line mr-3 text-lg"></i>
                        <span className="text-sm">Feedback</span>
                    </li>


                    {/* <li className="flex items-center py-2 px-4 text-gray-200 mb-2 hover:bg-[#0d0b2a] hover:text-[#bee7ff] rounded-[10px]">
                        <i class="ri-home-2-line mr-3 text-lg"></i>
                        <span className="text-sm">Dashboard</span>
                    </li> */}

                </ul>

                <div className="flex justify-center items-center pb-4 border-b border-b-gray-200 h-[10%]">
                    <button className="border-[#bee7ff] text-[#0F041C] bg-[#ffffff] px-4 py-2 rounded-[10px] hover:bg-[#bee7ff] hover:text-[#ffffff]">Log out</button>
                </div>

            </aside>


            <main className="w-[calc(100%-256px)] ml-64 bg-[#ffffff]">
                <nav className="py-2 px-6 bg-[#ffffff] flex items-center justify-between shadow-md shadow-black/5">
                    <span className="font-medium">Dashboard</span>

                    <div className="flex justify-center items-center">

                        <span>Admin name</span>

                        <img src={uicon} alt="" className="h-11 w-11 ml-2  rounded-[100%] object-cover" />
                    </div>
                </nav>

                <div className="p-6 ">


                    <div className="home" id="home">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between items-center">

                                    <div className="flex items-center">

                                        <div className="text-xl font-medium text-gray-400">Users</div>

                                        <i class="ri-arrow-drop-right-line text-4xl pt-1"></i>

                                        <div className="text-2xl font-semibold">{Object.keys(users).length}</div>

                                        <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold ml-2">+50%</div>

                                    </div>

                                    <i class="ri-group-fill text-3xl font-semibold"></i>
                                </div>
                            </div>


                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between items-center">

                                    <div className="flex items-center">

                                        <div className="text-xl font-medium text-gray-400">Events</div>

                                        <i class="ri-arrow-drop-right-line text-4xl pt-1"></i>


                                        <div className="text-2xl font-semibold">{Object.keys(data).length}</div>

                                    </div>

                                    <i class="ri-calendar-event-fill text-3xl font-semibold"></i>
                                </div>
                            </div>


                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between items-center">

                                    <div className="flex items-center">

                                        <div className="text-xl font-medium text-gray-400">Income</div>

                                        <i class="ri-arrow-drop-right-line text-4xl pt-1"></i>

                                        <div className="text-2xl font-semibold">$200</div>

                                        <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold ml-2">+30%</div>

                                    </div>

                                    <i class="ri-currency-fill text-3xl font-semibold"></i>
                                </div>
                            </div>


                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between items-center">

                                    <div className="flex items-center">

                                        <div className="text-xl font-medium text-gray-400">Feedback</div>

                                        <i class="ri-arrow-drop-right-line text-4xl pt-1"></i>

                                        <div className="text-2xl font-semibold">200</div>

                                    </div>

                                    <i class="ri-feedback-fill text-3xl font-semibold"></i>
                                </div>
                            </div>


                        </div>

                        <div className="bg-[#0F041C] p-3 rounded">

                            <div className="flex justify-center">
                                <span className="text-2xl w-full text-center pb-2 font-semibold text-white">Events</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 h-[500px] overflow-scroll overflow-x-hidden mt-5">



                                {Object.values(data).map((tracker) => {

                                    return (
                                        <div key={tracker} className="flex justify-between items-center h-[120px] text-[#1C1128]  bg-white ">
                                            <div className="w-[30%] h-[100%] bg-[#bee7ff]" >
                                                <img src={ticon} alt="" className="" />
                                            </div>

                                            <p className="flex-col justify-start items-center m-3">
                                                <span>{tracker.name.slice(0, 10)}</span><br />
                                                <span>$ {tracker.price}</span><br />
                                                <span>{tracker.location.slice(0, 10)}</span><br />
                                                <span>{tracker.startDate.slice(0, 10)} - {tracker.endDate.slice(0, 10)}</span><br />
                                            </p>

                                            <div className="flex justify-center items-center border-l border-l-black h-[80%]">
                                                <span className="p-2">{tracker.numTickets}</span>
                                            </div>
                                        </div>
                                    )
                                })}








                            </div>
                        </div>





                    </div>

                    <div className="users hidden" id="users">
                        <div className="w-full flex justify-center">
                            <div className=" w-[90%]  bg-[#0F041C] text-white rounded border-2 border-[#000000] px-6 py-4">
                                <div className="flex justify-between items-center font-serif pb-2 mb-7 border-b-2 border-[#bee7ff]">
                                    <th className="text-start w-[25%]">ID</th>
                                    <th className="text-start w-[25%]">Name</th>
                                    <th className="text-start w-[25%]">Email</th>
                                    <th className="text-start w-[5%]">Status</th>
                                </div>

                                {Object.values(users).map((tracker, index) => {
                                    return (
                                        <div key={tracker} className=" flex justify-between items-center my-3 p-2 rounded-[10px] border-0 border-[#000000]  shadow-lg shadow-[#bee7ff]">
                                            <td className="text-start w-[25%]">{index}</td>
                                            <td className="text-start w-[25%]">{tracker.name}</td>
                                            <td className="text-start w-[25%]">{tracker.email}</td>
                                            <td className="text-start w-[5%]"><div id="status" onClick={() => { activate_handle(tracker.id) }} className="w-5 h-5 pl-1 rounded-[100%] border-[3px] border-[#ffffff84] bg-[#3ade28] shadow-md shadow-red-950/40"></div></td>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="events hidden" id="events">
                        <div className="">

                            <div className="bg-[#0F041C] p-3 rounded">

                                <div className="flex justify-between items-center pb-2">
                                    <div className="w-[25%] flex justify-start items-center">
                                        <button onClick={update_form_handle} className="border-[#ffffff] text-[#0F041C] bg-[#ffffff] px-4 py-1 rounded-[10px] hover:bg-[#bee7ff] hover:text-[#ffffff]">Update</button>
                                    </div>

                                    <div className="w-[50%] flex justify-center items-center">
                                        <span className="text-2xl w-full text-center pb-2 font-semibold text-white ">Events</span>
                                    </div>

                                    <div className="w-[25%] flex justify-end items-center">
                                        <button onClick={add_form_handle} className="border-[#bee7ff] text-[#0F041C] bg-[#ffffff] px-4 py-1 rounded-[10px] hover:bg-[#bee7ff] hover:text-[#ffffff]">Add</button>
                                    </div>

                                </div>

                                <div className="flex flex-wrap h-[300px] overflow-scroll overflow-x-hidden">
                                    {Object.values(data).map((tracker) => {
                                        return (
                                            <div key={tracker} className="flex  justify-between  items-center p-2 w-[49%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">
                                                <i className="fa-solid fa-ticket text-3xl w-[10%] hover:text-[#bee7ff]"></i>

                                                <p className="text-sm text-start w-[75%] ml-2"><span>{tracker.id}</span> - <span>{tracker.name.slice(0, 10)}</span> - <span>{tracker.location.slice(0, 9)}</span> - <span>${tracker.price}</span>
                                                    <span className="ml-2"> {tracker.startDate.slice(0, 10)}</span>  to  <span>{tracker.endDate.slice(0, 10)}</span></p>

                                                <div className="icons w-[10%] flex justify-end items-center">
                                                    <i className="fa-solid fa-trash text-xl hover:text-[#cd3e3e]  " onClick={() => (delete_handle(tracker.id))}></i>

                                                    {/* <i className="fa-solid fa-pen-to-square text-xl ml-2 hover:text-[#47da47]" onClick={() => { update_get_handle(tracker.id) }}></i> */}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>


                        </div>

                        <div className="mt-12">


                            <div className="bg-[#0F041C] p-3 rounded">

                                <div className="flex justify-between items-center  pb-2">
                                    <div className="w-[25%] flex justify-start items-center">
                                    </div>

                                    <div className="w-[50%] flex justify-center items-center">
                                        <span className="text-2xl w-full text-center pb-2 font-semibold text-white ">Coupons</span>
                                    </div>

                                    <div className="w-[25%] flex justify-end items-center">
                                        <button onClick={coupon_add_form} className="border-[#bee7ff] text-[#0F041C] bg-[#ffffff] px-4 py-1 rounded-[10px] hover:bg-[#bee7ff] hover:text-[#ffffff]">Add</button>
                                    </div>

                                </div>

                                <div className="flex flex-wrap h-[150px] overflow-scroll overflow-x-hidden">
                                    {Object.values(coupons).map((tracker) => {
                                        return (
                                            <div key={tracker} className="flex  justify-between flex-wrap  items-center p-2 w-[20%] h-fit mx-auto m-3 bg-[#ffffff] rounded-[15px]">

                                                <i className="fa-solid fa-tags text-3xl w-[20%] hover:text-[#bee7ff]"></i>

                                                <p className="text-sm text-center w-[60%]"><span>{tracker.id}</span> - <span>%{tracker.discount}</span></p>

                                                <div className="icons w-[20%]">

                                                    <i className="fa-solid fa-trash text-xl hover:text-[#cd3e3e] " onClick={() => { coupon_delete_handle(tracker.id) }}></i>

                                                </div>

                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* #bee7ff */}

                    <div className="add_form w-[100%] h-[100vh] absolute   bottom-0 left-0   hidden" id="add_form">

                        <div className="bg-[#0F041C] p-3 rounded ">
                            <div className="add_event  flex-col justify-between items-start  w-[50%] h-[60%] p-5 text-[#000000] bg-[#bee7ff]   text-center  rounded mx-auto ">
                                <h3 className="text-center text-2xl font-bold border-b-2 border-[#000000] pb-2">Add Event</h3>


                                <div className="flex flex-wrap justify-center items-center  h-fit py-3">
                                    <div className="up w-2/4 h-fit  text-left flex-col self-center">

                                        <label htmlFor="" className="">Event name <br></br>
                                            <input id="e_name" type="text" className=" w-5/6 h-10 my-2 px-2 text-[#ffffff] bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Price <br></br>
                                            <input id="e_price" type="text" className=" w-5/6 h-10 my-2 px-2 text-[#ffffff] bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>



                                        <br></br>

                                        <label htmlFor="" className="">Start Date <br></br>
                                            <input id="e_start_date" type="text" className=" w-5/6 h-10 my-2 text-[#ffffff] px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>
                                    </div>

                                    {/* <br></br> */}

                                    <div className="down w-2/4  h-fit text-left  ">
                                        <label htmlFor="" className="">Location <br></br>
                                            <input id="e_location" type="text" className=" w-5/6 h-10  my-2 text-[#ffffff] px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Quantity <br></br>
                                            <input id="e_quantity" type="text" className=" w-5/6 h-10  my-2 text-[#ffffff] px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Expiry Date <br></br>
                                            <input id="e_end_date" type="text" className=" w-5/6 h-10  my-2 text-[#ffffff] px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>
                                    </div>
                                </div>

                                <div className="text-left">
                                    <label htmlFor="" className="">Image URL <br></br>
                                        <input id="e_image" type="text" className=" w-full h-10 my-2 px-2 text-[#ffffff] bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff] " />
                                    </label>
                                </div>

                                <div className="text-left">
                                    <label htmlFor="" className="">Description <br></br>
                                        <input id="e_desc" type="text" className=" w-full h-10 my-2 px-2 text-[#ffffff] bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff] " />
                                    </label>
                                </div>


                                <div className="h-2/6 ">
                                    <button className="px-5 py-2 bg-[#ffffff] text-[#1C1128] rounded m-5" onClick={add_handle}>Add Event</button>

                                    <button className="px-5 py-2 bg-[#ffffff] text-[#1C1128] rounded m-5" onClick={cancel_handle} >Cancel</button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="update_form w-[100%] h-[100vh] absolute   bottom-0 left-0   hidden" id="update_form">

                        <div className="bg-[#0F041C] p-3 rounded flex items-center ">
                            <div className="add_event  flex-col justify-between items-start  w-[50%] h-[60%] p-5 bg-[#bee7ff] text-[#000000]   text-center  rounded mx-auto ">
                                <h3 className="text-center text-2xl font-bold border-b-2 border-[#000000] pb-2">Update Event</h3>


                                <div className="flex flex-wrap justify-center items-center h-fit py-3">
                                    <div className="up w-2/4 h-fit  text-left flex-col self-center">

                                        <label htmlFor="" className="">Event name <br></br>
                                            <input id="e_name_u" type="text" className="w-5/6 h-10 my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Price <br></br>
                                            <input id="e_price_u" type="text" className="w-5/6 h-10 my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>



                                        <br></br>

                                        <label htmlFor="" className="">Start Date <br></br>
                                            <input id="e_start_date_u" type="text" className="w-5/6 h-10 my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>
                                    </div>

                                    {/* <br></br> */}

                                    <div className="down w-2/4  h-fit text-left ">
                                        <label htmlFor="" className="">Location <br></br>
                                            <input id="e_location_u" type="text" className="w-5/6 h-10  my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Quantity <br></br>
                                            <input id="e_quantity_u" type="text" className="w-5/6 h-10  my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Expiry Date <br></br>
                                            <input id="e_end_date_u" type="text" className="w-5/6 h-10  my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff]  " />
                                        </label>
                                    </div>
                                </div>

                                <div className="text-left">
                                    <label htmlFor="" className="">Image URL <br></br>
                                        <input id="e_image_u" type="text" className="w-full h-10 my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff] " />
                                    </label>
                                </div>

                                <div className="text-left">
                                    <label htmlFor="" className="">Description <br></br>
                                        <input id="e_desc_u" type="text" className="w-full h-10 my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff] " />
                                    </label>
                                </div>


                                <div className="h-2/6 ">
                                    <button className="px-5 py-2 bg-[#ffffff] text-[#1C1128] rounded m-5" onClick={() => { update_handle(eid) }}>Update</button>

                                    <button className="px-5 py-2 bg-[#ffffff] text-[#1C1128] rounded m-5" onClick={cancel_handle} >Cancel</button>
                                </div>

                            </div>

                            <div className="w-[230px] ">
                                <h3 className="text-white text-center">Select Event</h3>
                                <div className="flex-col h-[600px] overflow-scroll overflow-x-hidden">

                                    {Object.values(data).map((tracker) => {
                                        return (
                                            <div onClick={() => { select_event_handle(tracker.id) }} key={tracker} className="flex  justify-between  items-center p-2 w-[200px] mx-auto my-2 bg-[#ffffff] rounded-[15px]">
                                                <i className="fa-solid fa-ticket text-3xl w-[10%] hover:text-[#bee7ff]"></i>

                                                <p className="text-sm text-start w-[75%] ml-2"><span>{tracker.id}</span> - <span>{tracker.name.slice(0, 10)}</span> </p>

                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="coupon_add_form w-[100%] h-[100vh] absolute   bottom-0 left-0   hidden" id="coupon_add_form">

                        <div className="bg-[#0F041C] p-3 rounded flex justify-center items-center ">
                            <div className="add_coupon  flex-col justify-between items-start  w-[40%] h-full bg-[#bee7ff]   text-center py-3 px-10 rounded mx-auto ">



                                <div className="flex-row flex-wrap justify-center items-center h-1/2">

                                    <h3 className="text-2xl font-bold border-b-2 border-[#000000] pb-2">Add Coupon</h3>

                                    <div className="inputs flex justify-center items-center w-full text-left ">
                                        <label htmlFor="" className="">Coupon ID :<br></br>
                                            <input id="coupon_id" type="text" className="text- h-10 my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff] text-[#ffffff] mx-3 " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Discount :<br></br>
                                            <input id="coupon_discount" type="text" className="text- h-10 my-2 px-2 bg-[#ffffff] rounded-[10px] border-2 border-[#ffffff] text-[#ffffff] mx-3 " />
                                        </label>

                                    </div>
                                </div>



                                <div className="m-3 ">
                                    <button className="px-5 py-2 bg-[#ffffff] text-[#1C1128] rounded m-5" onClick={add_coupon}>Add Coupon</button>

                                    <button className="px-5 py-2 bg-[#ffffff] text-[#1C1128] rounded m-5" onClick={cancel_handle} >Cancel</button>
                                </div>

                            </div>
                        </div>



                    </div>



                    <div className="feedback hidden" id="feedback">
                        ggggggggggggggggg
                    </div>

                </div>

            </main>




        </div>




    )
}

export default Db;