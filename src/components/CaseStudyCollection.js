import React, { useState, useEffect } from 'react';
import CaseStudy from './CaseStudy.js';
import NexGenLogo from '../images/nexgen_logo.png';
import WardenLogo from '../images/warden_logo.png';
import StarlitLogo from '../images/starlit_logo.png';
import GPSCAMLogo from '../images/gps_cam_logo.png';
import DIGGSLogo from '../images/DIGGSIcon.png';
import ImmersiveStudioLogo from '../images/immersive_studio_image.png';
import PhilatelicLogo from '../images/philatelic.png';
import LondonBookAndMapLogo from '../images/london_book_and_map_logo.jpg';
import OutlierLogo from '../images/outlier_logo.jpg';
import LimitlessCompetitionsLogo from '../images/limitless_competitions_logo.jpg';
import ReinventLogo from '../images/reinvent_logo.png';

const CaseStudyCollection = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Function to update window width state when the window is resized
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Add an event listener for window resize
		window.addEventListener('resize', handleWindowResize);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const immersiveStudioBulletPoints = ["OpenCV", "C++ 20", "Boost"];
	const diggsBulletPoints = ["Network Engineering", "Windows Presentation Foundation", "ISO Standards"];
	const gpsCamBulletPoints = ["Multithreading", "Opencascade", "C++/CLI"];
	const nexPloreBulletPoints = ["CD/CI", "Amazon Web Services", "REST API's"];
	const wardenBulletPoints = ["iOS Development", "Microsoft Azure", "SQL"];
	const starlitBulletPoints = ["Android Development", "Deployment on Google Services", "Unity 3D"];
	const philatelicBulletPoints = ["MariaDB/MySQL", "PHP", "Docker"];
	const outlierBulletPoints = ["Prompt Engineering", "Meta AI", "Large Language Models (LLMs)"]
	const londonBookAndMapBulletPoints = ["Jetpack", "WooCommerce", "Wordpress"];
	const limitlessCompetitionsBulletPoints = ["Javascript", "HTML", "DNS Management"];
	const reinventBulletPoints = ["Typescript", "React", "Amazon Cognito"];

	if (windowWidth > 768) {
		return (
			<div className="container">
				<div className="row">
					<div className="col-4">						
						<CaseStudy caseStudyImage={LimitlessCompetitionsLogo}
							title="limitless-competitions.co.uk"
							brief="A digital raffle offering a selection of diverse prizes."
							bulletPoints={limitlessCompetitionsBulletPoints}
						/>
					</div>
					<div className="col-4">						
						<CaseStudy caseStudyImage={LondonBookAndMapLogo}
							title="londonbookandmap.com"
							brief="E-commerce store for historical texts and articles sourced within the United Kingdom"
							bulletPoints={londonBookAndMapBulletPoints}
						/>
					</div>
					<div className='col-4'>
						<CaseStudy caseStudyImage={OutlierLogo}
							title="Outlier"
							brief="Leveraged Prompt Engineering Techniques to Enhance Multiple LLMs, Including Meta AI"
							bulletPoints={outlierBulletPoints}
						/>
					</div>
				</div>									
				<div className="row">					
					<div className="col-4">
						<CaseStudy caseStudyImage={PhilatelicLogo}
							title="Philatelic.co.uk"
							brief="Custom-designed online store specializing in the sale of Great Britain and Commonwealth stamps and stationery"
							bulletPoints={philatelicBulletPoints}
						/>
					</div>
					<div className="col-4">
						<CaseStudy caseStudyImage={ReinventLogo}
							title="Reinvent"
							brief="AI-powered consultancy specializing in viral marketing strategies."
							bulletPoints={reinventBulletPoints}
						/>
					</div>
					<div className="col-4">
						<CaseStudy caseStudyImage={ImmersiveStudioLogo}
							title="Immersive Studio"
							brief="Augmented reality environments integrating multiple senses for educational purposes"
							bulletPoints={immersiveStudioBulletPoints}
						/>
					</div>					
				</div>																
				<div className="row">
					<div className="col-4">
						<CaseStudy caseStudyImage={DIGGSLogo}
							title="DIGGS"
							brief="Networked Gear Inspection Solution connected to Renishaw Equator™s"
							bulletPoints={diggsBulletPoints}
						/>
					</div>	
					<div className="col-4">
						<CaseStudy caseStudyImage={GPSCAMLogo}
							title="GPS CAM"
							brief="Computer Aided Manufacturing Solution for 5-Axis CNC of Gears"
							bulletPoints={gpsCamBulletPoints} />
					</div>	
					<div className="col-4">
						<CaseStudy caseStudyImage={NexGenLogo}
							title="NexPlore"
							brief="3D Asbestos Risk Visualization & Management Web App"
							bulletPoints={nexPloreBulletPoints} />
					</div>					
				</div>
				<div className="row">
					<div className="col-4">
						<CaseStudy caseStudyImage={StarlitLogo}
							title="Starlit"
							brief="Endless Runner Mobile Game for Google Play Store"
							bulletPoints={starlitBulletPoints} />
					</div>
					<div className="col-4">
						<CaseStudy caseStudyImage={WardenLogo}
							title="Warden"
							brief="Mobile App for Property Reviews in Belfast"
							bulletPoints={wardenBulletPoints} />
					</div>
				</div>
			</div>
		)
	}

	else {
		return (
			<div>
				<CaseStudy caseStudyImage={LimitlessCompetitionsLogo}
					title="limitless-competitions.co.uk"
					brief="A digital raffle offering a selection of diverse prizes."
					bulletPoints={limitlessCompetitionsBulletPoints} />
				<CaseStudy caseStudyImage={LondonBookAndMapLogo}
					title="londonbookandmap.com"
					brief="E-commerce store for Chinese texts and articles sourced within the United Kingdom."
					bulletPoints={londonBookAndMapBulletPoints} />
				<CaseStudy caseStudyImage={OutlierLogo}
					title="Outlier"
					brief="Leveraged Prompt Engineering Techniques to Enhance Multiple LLMs, Including Meta AI"
					bulletPoints={outlierBulletPoints} />
				<CaseStudy caseStudyImage={PhilatelicLogo}
					title="Philatelic.co.uk"
					brief="Custom-designed online store specializing in the sale of Great Britain and Commonwealth stamps and stationery"
					bulletPoints={philatelicBulletPoints} />	
				<CaseStudy caseStudyImage={ReinventLogo}
					title="Reinvent"
					brief="AI-powered consultancy specializing in viral marketing strategies."
					bulletPoints={philatelicBulletPoints} />					
				<CaseStudy caseStudyImage={ImmersiveStudioLogo}
					title="Immersive Studio"
					brief="Augmented reality environments integrating multiple senses for educational purposes"
					bulletPoints={immersiveStudioBulletPoints} />				
				<CaseStudy caseStudyImage={DIGGSLogo}
					title="DIGGS"
					brief="Networked Gear Inspection Solution connected to Renishaw Equator™s"
					bulletPoints={diggsBulletPoints} />
				<CaseStudy caseStudyImage={GPSCAMLogo}
					title="GPS CAM"
					brief="Computer Aided Manufacturing Solution for 5-Axis CNC of Gears"
					bulletPoints={gpsCamBulletPoints} />
				<CaseStudy caseStudyImage={NexGenLogo}
					title="NexPlore"
					brief="3D Asbestos Risk Visualization & Management Web App"
					bulletPoints={nexPloreBulletPoints} />
				<CaseStudy caseStudyImage={WardenLogo}
					title="Warden"
					brief="Mobile App for Property Reviews in Belfast"
					bulletPoints={wardenBulletPoints} />
				<CaseStudy caseStudyImage={StarlitLogo}
					title="Starlit"
					brief="Endless Runner Mobile Game for Google Play Store"
					bulletPoints={starlitBulletPoints} />
			</div>
		)
	}
};

export default CaseStudyCollection;