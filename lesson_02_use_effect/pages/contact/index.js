import React, { Component, useState } from "react";

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 111 };
	}

	add = () => {
		this.setState({ count: 200 });
	};

	render() {
		return (
			<div className="contactus">
				<div className="firstsqua">
					<div className="conrow1">
						<h1 className="contitle">Contact Us</h1>
						<p className="coinfo">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam
						</p>
					</div>
					<div className="twosqua">
						<div className="consquare">
							<h1 className="addcon">Address</h1>
							<p className="address">
								1328 Oak Ridge Drive, Saint Louis, Missouri
							</p>
						</div>
						<div className="consquare">
							<h1 className="addcon">Contact</h1>
							<p className="address2">313-332-8662 info@email.com</p>
						</div>
					</div>
					<div className="mesg">
						<div className="mesg2">
							<h1 className="leave">Leave a Message</h1>
							<div className="your">
								<input
									type="text"
									id="con"
									placeholder="Your Name"
									className="coninp"
								/>
								<input
									type="text"
									id="con"
									placeholder="Your Email"
									className="coninp"
								/>
							</div>
							<input
								type="text"
								id="con"
								placeholder="Subject"
								className="coninp2"
							/>
							<input
								type="text"
								id="con"
								placeholder="Write a message"
								className="coninp3"
							/>
							<div className="blueb">Send Message</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
