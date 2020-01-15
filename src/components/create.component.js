import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        // UHID
        this.onBlurUHID = this.onBlurUHID.bind(this);
        this.onFocusUHID = this.onFocusUHID.bind(this);
        this.onChangeUHID = this.onChangeUHID.bind(this);
        // FirstName
        this.onBlurFirstname = this.onBlurFirstname.bind(this);
        this.onFocusFirstname = this.onFocusFirstname.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        // Lastname
        this.onBlurLastname = this.onBlurLastname.bind(this);
        this.onFocusLastname = this.onFocusLastname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        // Age
        this.onBlurAge = this.onBlurAge.bind(this);
        this.onFocusAge = this.onFocusAge.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        // Qualification
        this.onBlurQualification = this.onBlurQualification.bind(this);
        this.onFocusQualification = this.onFocusQualification.bind(this);
        this.onChangeQualification = this.onChangeQualification.bind(this);
        // SES
        this.onBlurSES = this.onBlurSES.bind(this);
        this.onFocusSES = this.onFocusSES.bind(this);
        this.onChangeSES = this.onChangeSES.bind(this);
        // Marital Status
        this.onBlurMaritalStatus = this.onBlurMaritalStatus.bind(this);
        this.onFocusMaritalStatus = this.onFocusMaritalStatus.bind(this);
        this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
        // Employment Status
        this.onBlurEmploymentStatus = this.onBlurEmploymentStatus.bind(this);
        this.onFocusEmploymentStatus = this.onFocusEmploymentStatus.bind(this);
        this.onChangeEmploymentStatus = this.onChangeEmploymentStatus.bind(this);
        // Referal Doctor
        this.onBlurReferalDoctor = this.onBlurReferalDoctor.bind(this);
        this.onFocusReferalDoctor = this.onFocusReferalDoctor.bind(this);
        this.onChangeReferalDoctor = this.onChangeReferalDoctor.bind(this);
        // Submit
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            UHID: '',
            UHIDBlank: undefined,
            personFirstname: '',
            firstnameBlank: undefined,
            personLastname: '',
            lastNameBlank: undefined,
            age: '',
            ageBlank: undefined,
            qualification: '',
            qualificationBlank: undefined,
            SES: '',
            SESBlank: undefined,
            maritalStatus: '',
            maritalStatusBlank: undefined,
            employmentStatus: '',
            employmentStatusBlank: undefined,
            referalDoctor: '',
            referalDoctorBlank: undefined,
          }
    }

    // UHID starts here
    onFocusUHID(e) {
      this.setState({ UHIDBlank : false })
    }
    onBlurUHID(e){
      if (e.target.value === "") {
        this.setState({
          UHIDBlank : true
        });
      }
      else {
        this.setState({
          UHIDBlank : false
        });
      }
    }
    onChangeUHID(e) {
      this.setState({ UHID: e.target.value})
    }
    // UHID ends here

    // Firstname begins here
    onFocusFirstname(e) {
      this.setState({ firstnameBlank : false })
    }
    onBlurFirstname(e){
      if (e.target.value === "") {
        this.setState({
          firstnameBlank : true
        });
      }
      else {
        this.setState({
          firstnameBlank : false
        });
      }
    }

    onChangeFirstname(e) {
      this.setState({
        personFirstname: e.target.value
      });
    }
    // Firstname ends here

    // Lastname begins here
    onFocusLastname(e) {
      this.setState({ lastnameBlank : false })
    }
    
    onBlurLastname(e){
      if (e.target.value === "") {
        this.setState({
          lastnameBlank : true
        });
      }
      else {
        this.setState({
          lastnameBlank : false
        });
      }
    }

    onChangeLastname(e) {
      this.setState({
        personLastname: e.target.value
      })  
    }
    // Lastname ends here

    // age begins here
    onFocusAge(e) {
      this.setState({ ageBlank : false })
    }
    
    onBlurAge(e){
      if (e.target.value === "" || (/\d+/.test(e.target.value) === false)) {
        this.setState({
          ageBlank : true
        });
      }
      else {
        this.setState({
          ageBlank : false
        });
      }
    }

    onChangeAge(e) {
      this.setState({
        age: e.target.value
      })  
    }
    // age ends here

    // qualification begins here
    onFocusQualification(e) {
      this.setState({ qualificationBlank : false })
    }
    
    onBlurQualification(e){
      if (e.target.value === "") {
        this.setState({
          qualificationBlank : true
        });
      }
      else {
        this.setState({
          qualificationBlank : false
        });
      }
    }

    onChangeQualification(e) {
      this.setState({
        qualification: e.target.value
      })  
    }
    // qualification ends here

    // SES begins here
    onFocusSES(e) {
      this.setState({ SESBlank : false })
    }
    
    onBlurSES(e){
      if (e.target.value === "") {
        this.setState({
          SESBlank : true
        });
      }
      else {
        this.setState({
          SESBlank : false
        });
      }
    }

    onChangeSES(e) {
      this.setState({
        SES: e.target.value
      })  
    }
    // SES ends here


    // Marital Status begins here
    onFocusMaritalStatus(e) {
      this.setState({ maritalStatusBlank : false })
    }
    
    onBlurMaritalStatus(e){
      if (e.target.value === "") {
        this.setState({
          maritalStatusBlank : true
        });
      }
      else {
        this.setState({
          maritalStatusBlank : false
        });
      }
    }

    onChangeMaritalStatus(e) {
      this.setState({
        maritalStatus: e.target.value
      })  
    }
    // Marital Status ends here

    // Employment Status begins here
    onFocusEmploymentStatus(e) {
      this.setState({ employmentStatusBlank : false })
    }
    
    onBlurEmploymentStatus(e){
      if (e.target.value === "") {
        this.setState({
          employmentStatusBlank : true
        });
      }
      else {
        this.setState({
          employmentStatusBlank : false
        });
      }
    }

    onChangeEmploymentStatus(e) {
      this.setState({
        employmentStatus: e.target.value
      });
    }
    // Employment Status ends here

    // Referal Doctor begins here
    onFocusReferalDoctor(e) {
      this.setState({ referalDoctorBlank : false })
    }
    
    onBlurReferalDoctor(e){
      if (e.target.value === "") {
        this.setState({
          referalDoctorBlank : true
        });
      }
      else {
        this.setState({
          referalDoctorBlank : false
        });
      }
    }

    onChangeReferalDoctor(e) {
      this.setState({
        referalDoctor: e.target.value
      });
    }
    // Referal Doctor ends here
  
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.UHID}, 
      ${this.state.personFirstname}, 
      ${this.state.personLastname},
      ${this.state.age},
      ${this.state.qualification},
      ${this.state.SES},
      ${this.state.maritalStatus},
      ${this.state.employmentStatus},
      ${this.state.referalDoctor},`);

      // red highlight to be shown for empty text fields while submitting

      let inputs = document.getElementsByClassName('form-control');

      function simulateBlur(i) {
        var event = new Event('blur', {
          view: window,
          bubbles: false,
          cancelable: true
        });
        var input = inputs[i]; 
        var cancelled = !input.dispatchEvent(event);
        if (cancelled) {
          // A handler called preventDefault.
          console.log("cancelled");
        } else {
          // None of the handlers called preventDefault.
          console.log("not cancelled");
        }
      }

      simulateBlur(0);
      simulateBlur(1);
      simulateBlur(2);
      simulateBlur(3);
      simulateBlur(4);
      simulateBlur(5);
      simulateBlur(6);
      simulateBlur(7);
      simulateBlur(8);
      
      if (this.state.personFirstname === "" || this.state.personLastname === "" || this.state.age === "" || this.state.qualification === "" || this.state.SES === "" || this.state.maritalStatus === "" || this.state.employmentStatus === "" || this.state.referalDoctor === "") {
        this.setState({allFilled: false});
      }
      else {
        this.setState({allFilled:true});
        localStorage.setItem('uhid', this.state.UHID);
        localStorage.setItem('firstname', this.state.personFirstname);
        localStorage.setItem('lastname', this.state.personLastname);
        localStorage.setItem('age', this.state.age);
        localStorage.setItem('qualification', this.state.qualification);
        localStorage.setItem('ses', this.state.SES);
        localStorage.setItem('marital_status', this.state.maritalStatus);
        localStorage.setItem('employment_status', this.state.employmentStatus);
        localStorage.setItem('referal_doctor', this.state.referalDoctor);
        window.location.href = "/ahana-psychometry/assessments/";
      }
    }

    render() {
        let classNameUHID = this.state.UHIDBlank ? "form-group error" : "form-group";
        let classNameFirstname = this.state.firstnameBlank ? "form-group error" : "form-group";
        let classNameLastname = this.state.lastnameBlank ? "form-group error" : "form-group";
        let classNameAge = this.state.ageBlank ? "form-group error" : "form-group";
        let classNameQualification = this.state.qualificationBlank ? "form-group error" : "form-group";
        let classNameSES = this.state.SESBlank ? "form-group error" : "form-group";
        let classNameMaritalStatus = this.state.maritalStatusBlank ? "form-group error" : "form-group";
        let classNameEmploymentStatus = this.state.employmentStatusBlank ? "form-group error" : "form-group";
        let classNameReferalDoctor = this.state.referalDoctorBlank ? "form-group error" : "form-group";
        return (
            <div className='container' style={{marginTop: 25}}>
                <h2 className="h2-small">Fill in the patient's details</h2>
                <form className="person-details" onSubmit={this.onSubmit}>
                    <div className="form-row">
                      <div className="col">
                        <div className={classNameUHID} >
                          <label>UHID</label>
                          <input type="text" className="form-control"
                            onChange={this.onChangeUHID}
                            onFocus={this.onFocusUHID} 
                            onBlur={this.onBlurUHID}/>
                          </div>
                      </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                          <div className={classNameFirstname}>
                            <label>First Name</label>
                            <input type="text" className="form-control"
                                value = {this.state.personFirstname}
                                onChange={this.onChangeFirstname}
                                onFocus={this.onFocusFirstname} 
                                onBlur={this.onBlurFirstname}/>
                          </div>
                        </div>
                        <div className="col">
                          <div className={classNameLastname}>
                            <label>Last Name</label>
                            <input type="text" className="form-control"
                                value = {this.state.personLastname}
                                onChange={this.onChangeLastname}
                                onFocus={this.onFocusLastname}
                                onBlur={this.onBlurLastname}/>
                          </div>
                        </div>
                      </div>
                    <div className="form-row">
                        <div className="col">
                          <div className={classNameAge}>
                            <label>Age  </label>
                            <input type="text" className="form-control"
                            value = {this.state.personAge}
                            onChange={this.onChangeAge}
                            onFocus={this.onFocusAge}
                            onBlur={this.onBlurAge}/>
                          </div>
                        </div>
                        <div className="col">
                          <div className={classNameQualification}>
                            <label htmlFor="Qualification">Qualification </label>
                            <select id="Qualification" className="form-control"
                            value = {this.state.qualification}
                            onChange={this.onChangeQualification}
                            onFocus={this.onFocusQualification}
                            onBlur={this.onBlurQualification}>
                              <option value="" defaultValue>Choose...</option>
                              <option value="Primary">Primary</option>
                              <option value="Secondary">Secondary</option>
                              <option value="UG">UG</option>
                              <option value="PG">PG</option>
                              <option value="Diploma">Diploma</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <div className={classNameSES}>
                          <label htmlFor="SocioEconomicStatus">Socio-Economic Status</label>
                          <select id="SocioEconomicStatus" className="form-control"
                          value={this.state.SES} 
                          onChange={this.onChangeSES}
                          onFocus={this.onFocusSES}
                          onBlur={this.onBlurSES}>
                            <option value="" defaultValue>Choose...</option>
                            <option value="Lower Class">Lower Class</option>
                            <option value="Middle Class">Middle Class</option>
                            <option value="Upper Class">Upper Class</option>
                          </select>
                        </div>
                      </div>
                        <div className="col">
                          <div className={classNameMaritalStatus}>
                            <label htmlFor="Marital Status">Marital Status</label>
                            <select id="MaritalStatus" className="form-control"
                            value = {this.state.maritalStatus}
                            onChange={this.onChangeMaritalStatus}
                            onFocus={this.onFocusMaritalStatus}
                            onBlur={this.onBlurMaritalStatus}>
                              <option value="" defaultValue>Choose...</option>
                              <option value="Married">Married</option>
                              <option value="Unmarried">Unmarried</option>
                              <option value="Divorcee">Divorcee</option>
                              <option value="Widow">Widow</option>
                              <option value="Widower">Widower</option>
                            </select>
                          </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                          <div className={classNameEmploymentStatus}>
                            <label htmlFor="EmploymentStatus">Employment Status </label>
                            <select id="EmploymentStatus" className="form-control"
                            value = {this.state.employmentStatus}
                            onChange={this.onChangeEmploymentStatus}
                            onFocus={this.onFocusEmploymentStatus}
                            onBlur={this.onBlurEmploymentStatus}>
                              <option value="" defaultValue>Choose...</option>
                              <option value="Employed">Employed</option>
                              <option value="Unemployed">Unemployed</option>
                              <option value="Self-employed">Self-employed</option>
                              <option value="Home maker">Home-maker</option>
                              <option value="Student">Student</option>
                            </select>
                          </div>
                        </div>
                      <div className="col">
                        <div className={classNameReferalDoctor}>
                          <label>Referal Doctor</label>
                          <input type="text" className="form-control"
                          value = {this.state.referalDoctor}
                          onChange={this.onChangeReferalDoctor}
                          onFocus={this.onFocusReferalDoctor}
                          onBlur={this.onBlurReferalDoctor}/>
                          </div>
                      </div>
                      </div>
                      <p className={this.state.allFilled?'form-feedback hidden':'form-feedback shown'}>All fields are mandatory.</p>
                      <div className="form-group">
                          <input type="submit" value="Submit" className="btn btn-primary"/>
                      </div>
                </form>
            </div>
        )
    }
}