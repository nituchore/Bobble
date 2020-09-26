import React, { Component } from "react";
import fb from '../facebook.svg';
import gplus from '../google.svg';

export default class SignUp extends Component {
    render() {
		return (
			<div class="container">
				<div class="row">
					<div id="signup" class="col-xxs">
						<h1>Create Your Account</h1>
						<p class="font-weight-light"> Lorem Ipsum, giving information .</p>
						<div class="row opt">
							<div class="col-md-6">
								<button class="btn btn-light opt1"><img src={gplus} className="ig" alt="g-logo" /><p>Sign Up with Google</p></button>
							</div>
							<div class="col-md-6">
								<button class="btn btn-light opt1"><img src={fb} className="ig" alt="fb-logo" /><p>Sign Up with Facebook</p></button>
							</div>
						</div>
						<hr class="divider" />
						<form class="forminput" method="" action="">
							<div class="form-group">
								<input type="text" class="form-control" name="fname" placeholder="First Name" required />
							</div>
							<div class="form-group">
								<input type="text" class="form-control" name="lname" placeholder="Last Name" required />
							</div>
							<div class="form-group">
								<input type="email" class="form-control" name="email" placeholder="Email" required />
							</div>
							<div class="form-group">
								<input type="password" class="form-control" name="password" placeholder="Password" required /><i class="far fa-eye" id="togglePassword"></i>
							</div>
							<span>By clicking Sign Up, You agree to our <a href="#">Terms of use</a> and and our <a href="#">Privacy Policy</a></span>
							<div class="form-group">
								<button class="btn btn-lg btn-block btn-primary">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}