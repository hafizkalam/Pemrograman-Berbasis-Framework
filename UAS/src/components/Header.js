import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';
import buku0 from '../assets/buku0.jpg';
import buku1 from '../assets/buku1.jpg';
import buku2 from '../assets/buku2.jpg';
import buku3 from '../assets/buku3.jpg';
import emil from '../assets/emil.png';
import emilflower from '../assets/emilflower.jpg';
import game from '../assets/game.png';
import game1 from '../assets/game1.gif';
import game2 from '../assets/game2.gif';
import game3 from '../assets/game3.gif';
import game5 from '../assets/game5.gif';
import logo from '../assets/logo.png';

const Header = () => {

    const [price, setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id) => {
        dispatch(DLT(id))
    }


    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }

                </Menu>
            </Navbar>

            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">NieR</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Kini Tersedia.</h2>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Mulai</a>
                    </div>
                </div>
            </header>
            {/* <!-- About--> */}
            <section className="about-section text-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <img className="img-fluid-awal" src={logo} alt="..." />
                            <p className="text-white-50">
                                NieR: Automata adalah game buatan Platinum Games yang sukses meraih banyak penghargaan dan dinobatkan menjadi salah satu RPG terbaik di tahun rilisnya. NieR: Automata sendiri menceritakan para android yang berjuang melawan robot demi merebut kembali bumi
                                untuk manusia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Novel--> */}
            <section className="novel-section bg-light" id="novel">
                <div className="container">
                    {/* <!-- Featured novel Row--> */}
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={buku0} alt="..." /></div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Novel</h4>
                                <p className="text-black-50 mb-0">NieR: Automata juga tersedia dalam bentuk novel, mendetail cerita dan kejadian yang tersirat dalam gimnya, membuat para pemain lebih immersif dan mengetahui lebih dalam kisahnya.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Novel First Row--> */}
                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6"><img className="img-fluid" src={buku1} alt="..." /></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 novel">
                                <div className="d-flex h-100">
                                    <div className="novel-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">Long Story Short</h4>
                                        <p className="mb-0 text-white-50">Novel NieR: Automata pertama yang menceritakan petualangan para karakter dengan sudut pandang lebih rinci.</p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Novel Second Row--> */}
                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6"><img className="img-fluid" src={buku2} alt="..." /></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 novel">
                                <div className="d-flex h-100">
                                    <div className="novel-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">Short Story Long</h4>
                                        <p className="mb-0 text-white-50">Novel NieR: Automata kedua yang mengisahkan cerita sampingan dan mengungkap lebih banyak misteri yang tidak ada dalam gimnya.</p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Novel Third Row--> */}
                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6"><img className="img-fluid" src={buku3} alt="..." /></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 novel">
                                <div className="d-flex h-100">
                                    <div className="novel-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">YoRHa Boys</h4>
                                        <p className="mb-0 text-white-50">Novel NieR: Automata ketiga sekaligus terakhir yang menjelaskan asal-usul model S sekaligus perjuangan mereka di perang tanpa akhir.</p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Game--> */}
            <section className="game-section bg-light" id="game">
                <div className="container">
                    {/* <!-- Featured game Row--> */}
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Game</h4>
                                <p className="text-black-50 mb-0">NieR: Automata pertama kali dirilis dalam bentuk gim, yang tersedia untuk Playstation, X-BOX, dan PC</p>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={game} alt="..." /></div>

                    </div>
                    {/* <!-- Game First Row--> */}
                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6"><img className="img-fluid" src={game1} alt="..." /></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 game">
                                <div className="d-flex h-100">
                                    <div className="game-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Playstation</h4>
                                        <p className="mb-0 text-white-50">
                                            <ul>
                                                <li>+3C3C1D119440927 DLC*</li>
                                                <li>+Pod Skin and many more Pod Skin</li>
                                                <li>+Machine Mask Accessory</li>
                                                <li>+PS4™ Dynamic Theme and PS4™ Avatars</li>
                                            </ul>
                                        </p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Game Second Row--> */}
                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6"><img className="img-fluid" src={game2} alt="..." /></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 game">
                                <div className="d-flex h-100">
                                    <div className="game-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">X-BOX</h4>
                                        <p className="mb-0 text-white-50">
                                            <ul>
                                                <li>+3C3C1D119440927 DLC*</li>
                                                <li>+Grimoire Weiss Pod and many more Pod Skin</li>
                                                <li>+Machine Mask and Valve Character Accessory</li>
                                                <li>+Exclusive set of wallpapers</li>
                                            </ul>
                                        </p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Game Third Row--> */}
                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6"><img className="img-fluid" src={game3} alt="..." /></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 game">
                                <div className="d-flex h-100">
                                    <div className="game-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">PC</h4>
                                        <p className="mb-0 text-white-50">
                                            <ul>
                                                <li>+3C3C1D119440927 DLC*</li>
                                                <li>+Grimoire Weiss Pod and many more Pod Skin</li>
                                                <li>+Machine Mask Accessory</li>
                                                <li>+Exclusive set of wallpapers, Upraged Graphics</li>
                                            </ul>
                                        </p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header