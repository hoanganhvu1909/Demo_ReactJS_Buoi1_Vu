import React, { Component } from 'react'

export default class FormCreateProduct extends Component {

  state = {
    values: {
      id: '',
      name: '',
      price: '',
      image: '',
      description: '',
      productType: 'phone'
    },
    errors: {
      id: '',
      name: '',
      price: '',
      image: '',
      description: '',
    }
  }

  handleChangeInput = (e) => {
    let { value, id } = e.target; //id:price, value:1000

    let newValues = { ...this.state.values };
    newValues[id] = value;

    let newErrors = { ...this.state.errors }
    //Xu ly loi
    let messErros = '';
    if (value.trim() == '') {
      messErros = id + 'khong dc bo trong!';
    } else {
      let dataType = e.target.getAttribute('data-type');
      if (dataType === 'number') {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messErros = id + 'phai nhap so'
        }
      }
    }
    newErrors[id] = messErros;

    //setState
    this.setState({
      values: newValues,
      errors: newErrors
    }, () => {
      console.log(this.state);
    })




    // Cách này không phù hợp khi bài toán phức tạp có hai obj
    // this.setState({
    //   price: value
    // }, () => {
    //   console.log(this.state);
    // })
  }

  handleSubmit = (e) => {
    e.preventDefault(); //Ham nay giups ngan chan su kien reload cua browser khi form sibmit
    console.log('submit', this.setState);
  }


  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h3>Create Product</h3>
        <div className="card">
          <div className="card-header bg-dark text-warning">
            <h3>Product Info</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>id</p>
                  <input id='id' className='form-control' name='id' onInput={this.handleChangeInput} />
                </div>
                <p className='text text-danger'>{this.state.errors.id}</p>
                <div className="form-group">
                  <p>name</p>
                  <input id='name' className='form-control' name='name' onInput={this.handleChangeInput} />
                  <p className='text text-danger'>{this.state.errors.name}</p>
                </div>
                <div className="form-group">
                  <p>Price</p>
                  <input data-type="number" id='price' className='form-control' name='price' onInput={this.handleChangeInput} />
                  <p className='text text-danger'>{this.state.errors.price}</p>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <p>Image</p>
                  <input id='image' className='form-control' name='image' onInput={this.handleChangeInput} />
                  <p className='text text-danger'>{this.state.errors.image}</p>
                </div>
                <div className="form-group">
                  <p>productType</p>
                  <select className='form-control' id="productType" onInput={this.handleChangeInput}>
                    <option value={"Phone"}>phone</option>
                    <option value={"Tablet"}>tablet</option>
                    <option value={"Laptop"}>laptop</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>description</p>
                  <textarea onInput={this.handleChangeInput} name="description" id="description" className='form-control' />
                  <p className='text text-danger'>{this.state.errors.description}</p>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className='btn btn-success' type='submit'>Create</button>
        </div>
      </form>
    )
  }
}
