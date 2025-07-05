import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-white scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Waste Wise Backend',
							description: 'Undergraduate project, Group Project',
							// metrics: {
							// 	performance: 98,
							// 	accessibility: 100,
							// 	seo: 100,
							// },
							contributions: [
								'Implemented backend using Node.js using Express framework',
								'Implemented cron-job scheduling using node-cron js',
								'Implemented JWT Authentication using bcrypt js',
								'Link: https://github.com/Hasindu-Dilshan/waste-wise-backend/'],
							image: './code.jpg',
						},
						{
							title: 'MCQ Data Entry Application',
							description: 'Self-Project, Self-Paced',
							// metrics: {
							// 	performance: 98,
							// 	accessibility: 100,
							// 	seo: 100,
							// },
							contributions: [
								'Implemented All the UI Components',
								'Implemented the frontend in React Redux',
								'Implemented the backend in Node.js Express Framework',
								'Link: https://github.com/Hasindu-Dilshan/mcq-entry-app'],
							image: '/code.jpg',
						},
						{
							title: 'Online E-Shopping Store',
							description: 'Undergraduate project',
							// metrics: {
							// 	performance: 98,
							// 	accessibility: 100,
							// 	seo: 100,
							// },
							contributions: [
								'Built UI for Browse, Login and Registration using Bootstrap',
								'Designed Data Models for Product handling using MySQLi',
								'Implemented in JSP using MVC Architecture',
								'Link: https://github.com/Hasindu-Dilshan/jsp-shopping-store'],
							image: '/code.jpg',
						},
						{
							title: 'Library Management System',
							description: 'Undergraduate project',
							// metrics: {
							// 	performance: 98,
							// 	accessibility: 100,
							// 	seo: 100,
							// },
							contributions: [
								'Built UI for User Login and User Creation using Bootstrap',
								'Contributed to Databse Design and Implementation using MySQL',
								'Designed and Implemented CRUD in PHP for user management and authentication',
								'Link: https://github.com/Hasindu-Dilshan/online-library-management-system-'],
							image: '/code.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-600">{project.description}</p>

									{/* Performance Metrics */}
									{/* <div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold text-gray-900">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-600">{value}</div>
													<div className="text-sm text-gray-600 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div> */}

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Contributions</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.contributions.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-600">▹</span>
													<span className="text-gray-700">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-100 via-transparent to-transparent lg:via-gray-50/20 lg:to-gray"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
