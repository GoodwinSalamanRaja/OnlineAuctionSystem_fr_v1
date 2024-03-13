function AddProduct({ onBackButtonClick }) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row p-4">
                    <div className="col">
                        <h3>Add Products</h3>
                    </div>
                    <div className="col text-end">
                        <button type="button" class="btn-close fs-4" aria-label="Close" onClick={() => onBackButtonClick()}></button>
                    </div>
                    <hr className="mt-3"></hr>
                </div>
                <form class="row g-3 px-4 pb-5">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="email" class="form-control form-control-lg" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Category</label>
                        <select class="form-select form-select-lg" aria-label="Default select example" type="button">
                            <option selected>Please select here</option>
                            <option value="1" type="button">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;