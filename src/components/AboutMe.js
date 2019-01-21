import React from 'react';

class AboutMe extends React.Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading"><h1>About me</h1></div>
				<div className="panel-body">
					<ul>
						<li>Name: Nicolas Skirkey</li>
						<li>Location: Amherst, MA</li>
						<li>About me:
							<ul>
								<li>
									<p>
										I recently graduated from University of Massachusetts, Amherst this past May and have been preparing and myself 
										for interviewing for positions in the Software Engineering and Data Science fields. Both of which I have develped 
										a great interest for. 
									</p>

									<p>
										I am excited for my future having studied computer science, but am taking my time entering industry because I feel as though it is in my
										best interest. I'm currently following up on a number of opportunities that have recently presented themselves. Working remotely seems ideal for me
										as I feel like I could accomplish everything I need to while retaining the freedom of being able to travel when and wherever I like. 
									</p>

									<p>
										My past work experience has been in the service industry, where I have performed many different roles. However, the vast mojority of my experience 
										involves serving and bartending in various fine dining establishments. Working in this industry I've honed my communication skills, talking clearly and 
										effectively infront of groups of people with high expectations. These experiences have also made me an excellent team player and someone who can excel in 
										a fast paced and ofter stressful work environment. 
									</p>

									<p>
										I love to learn things and refuse to stop. This quality makes me very adaptable because I like to learn about all roles within development and the 
										technologies that support them. I also love learning new sports, new cooking recipies, and much more. I just received a hand-me-down guitar and have been
										reteaching myself (I played a bit when I was younger) so I suppose I can add that to my ever expanding list of hobbies.
									</p>
								</li>
							</ul>
						</li>

						<li>
							Hobbies:
							<ul>
								<li>Coding challenges (Hackerrank and Kaggle)</li>
								<li>Various comp sci related projects</li>
								<li>Rockclimbing</li>
								<li>Snowboarding</li>
								<li>Biking</li>
								<li>Hiking</li>
								<li>Ice Skating/Pond Hockey</li>
								<li>Guitar</li>
							</ul>
						</li>
					</ul> 
				</div>
			</div>
		)
	}
}

export default AboutMe;