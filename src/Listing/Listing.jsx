import "./Listing.css";

const Listing = () => {
    return (
        <>
            <section className="container listing">
                <h3 className="listing__title">List PG</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 p-2 justify-center">
                        <div className="row listing__body">
                            <div className="col-lg-3 p-0">
                                <ul className="nav nav-pills mb-3 d-flex flex-column detail__menu__list" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="w-100 nav-link  list__link d-flex justify-content-start active" id="room-detail-tab" data-bs-toggle="pill" data-bs-target="#room-detail" type="button" role="tab" aria-controls="room-detail" aria-selected="true"><img src="/image/Rectangle 10.png" alt />My Profile</button></li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="locality-detail-tab" data-bs-toggle="pill" data-bs-target="#locality-detail" type="button" role="tab" aria-controls="locality-detail" aria-selected="false"><img src="/image/Rectangle 86.png" alt />Tenant space</button></li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="pg-detail-tab" data-bs-toggle="pill" data-bs-target="#pg-detail" type="button" role="tab" aria-controls="pg-detail" aria-selected="false"><img src="/image/Rectangle 87.png" alt />Shortlist</button></li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="amenities-tab" data-bs-toggle="pill" data-bs-target="#amenities" type="button" role="tab" aria-controls="amenities" aria-selected="false"><img src="/image/Rectangle 88.png" alt />My Payments</button></li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="gallery-tab" data-bs-toggle="pill" data-bs-target="#amenities" type="button" role="tab" aria-controls="gallery" aria-selected="false"><img src="/image/Rectangle 89.png" alt />Change Password</button></li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link  list__link d-flex justify-content-start" id="schedule-tab" data-bs-toggle="pill" data-bs-target="#schedule" type="button" role="tab" aria-controls="amenities" aria-selected="false"><img src="/image/Rectangle 90.png" alt />Delete Listing</button></li>

                                </ul>
                            </div>
                            <div className="col-lg-9 p-0">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="w-100 tab-pane listing__pg show container active" id="room-detail" role="tabpanel" aria-labelledby="room-detail-tab">
                                        <h3>Room Details</h3>
                                        <hr className="divide" />
                                        <div className="mb-3">
                                            <label htmlFor="pg-name" className="form-label">PG Name *</label><input type="text" className="form-control" id="pg-name" placeholder="Enter Your PG Name" />
                                        </div>
                                        <h4>Select the type of rooms available in your PG</h4>
                                        <div className="room__detail__option d-flex justify-content-between align-item-between flex-wrap">
                                            <div className="btn-group row" role="group" aria-label="Basic radio toggle button group">

                                                
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                                <label className="btn btn-outline-primary col-lg-6" htmlFor="btnradio1">
                                                    <div>
                                                        <img src="/image/Room.png" alt="" />
                                                    
                                                    </div>Single</label>


                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                                <label className="btn btn-outline-primary col-lg-6" htmlFor="btnradio2">
                                                    <div>
                                                        <img src="/image/Room.png" alt="" />
                                                        <img src="/image/Room.png" alt="" />
                                                    
                                                    </div>Double</label>


                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                                <label className="btn btn-outline-primary col-lg-6" htmlFor="btnradio3">
                                                    <div>
                                                        <img src="/image/Room.png" alt="" />
                                                        <img src="/image/Room.png" alt="" />
                                                        <img src="/image/Room.png" alt="" />
                                                    
                                                    </div>Triple</label>


                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                                                <label className="btn btn-outline-primary col-lg-6" htmlFor="btnradio4">
                                                    <div>
                                                        <img src="/image/Room.png" alt="" />
                                                        <img src="/image/Room.png" alt="" />
                                                        <img src="/image/Room.png" alt="" />
                                                        <img src="/image/Room.png" alt="" />
                                                    
                                                    </div>Four</label>


                                            </div>



                                        </div>
                                    </div>
                                    <div className="tab-pane listing__pg" id="locality-detail" role="tabpanel" aria-labelledby="locality-detail-tab">
                                        <h3>Tenant Space</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="pg-detail" role="tabpanel" aria-labelledby="pg-detail-tab">
                                        <h3>Shortlist</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="amenities" role="tabpanel" aria-labelledby="amenities-tab">
                                        <h3>My Payments</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                                        <h3>Change Password</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                    <div className="tab-pane listing__pg" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                                        <h3>Delete Listing</h3>
                                        <div className="user__id d-flex justify-content-between align-items-center" />
                                        <div className="personal__info" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Listing;