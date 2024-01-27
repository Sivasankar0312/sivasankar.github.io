import { useState, EventHandler, ReactNode } from 'react'

const Navbar = () => {
	return (<div className="relative w-[1280px] h-[5096px] bg-[#fff]">
  <div className="absolute left-[122px] top-[343px] w-[100px] h-[38px]">
    <div className="absolute left-0 top-0 text-[25px] tracking-[.01em] font-['Poppins'] font-extrabold text-[#000] whitespace-nowrap">Hire Me</div>
  </div>
  <div className="absolute left-[119px] top-[236px] w-[642px] h-[70px]">
    <div className="absolute left-0 top-0 text-[60px] tracking-[.01em] font-['Roboto'] font-extrabold text-[#000] whitespace-nowrap">I’M</div>
    <div className="absolute left-[167px] top-0 w-[475px] h-[70px] overflow-hidden">
      <div className="absolute left-0 top-0 text-[60px] tracking-[.01em] font-['Roboto'] font-extrabold text-[#000] whitespace-nowrap">SIVASANKAR<br/>DATA ANALYST<br/>WEB DEVELOPER</div>
    </div>
  </div>
  <div className="absolute left-0 top-[367px] w-[1280px] h-[164px] bg-[#91c9ee99] border-0 border-solid border-[#000]"></div>
  <div className="absolute left-0 top-[531px] w-[1280px] h-[635px] bg-[#fff] overflow-hidden">
    <div className="absolute -translate-y-1/2 right-[209px] top-[calc(50%+-51px)] w-[685px] text-[20px] tracking-[.01em] font-['Poppins'] font-light text-[#000]">Aspiring Junior Python Developer with a strong foundation in Python programming, eager to contribute to software development projects. Proficient in data manipulation, problem-solving, and eager to learn and collaborate with a dynamic team.Proficient in data manipulation and analysis with Pandas and NumPy. Skilled in creating visualizations using Matplotlib and Seaborn, enhancing data insights.Highly skilled Full Stack developer proficient in Java, Python, and Agile methodologies. Seeking to leverage expertise in full-stack development and problem-solving to drive innovation. Experienced in creating efficient, scalable solutions. Proficient in Git, SQL, and responsive design. Committed to delivering top-tier code and exceeding project goals.</div>
    <div className="absolute left-0 top-[518px] w-[1280px] h-[117px] bg-[#bddef5] border-0 border-solid border-[#000]"></div>
    <img className="absolute left-[120px] top-[106px] rounded-full" width="239" height="275" src="Ellipse 1332_179.png"></img>
  </div>
  <div className="absolute left-0 top-[1166px] w-[1280px] h-[535px] bg-[#fff] overflow-hidden">
    <img className="absolute left-[143px] top-[81px]" width="100" height="0" src="Line 3341_171.png"></img>
    <img className="absolute left-[143px] top-[199px]" width="75" height="0" src="Line 3341_172.png"></img>
    <img className="absolute left-[143px] top-[291px]" width="100" height="0" src="Line 3341_173.png"></img>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-144px)] top-[99px] text-[20px] leading-[40px] tracking-[.01em] font-['Poppins'] font-275 text-[#000] whitespace-nowrap">Government College Of Engineering Srirangam,Trichy<br/>B.E(C.S.E)<br/>CGPA:8.49</div>
    <div className="absolute left-[211px] top-[274px] text-[20px] leading-[40px] tracking-[.01em] font-['Poppins'] font-275 text-[#000] whitespace-nowrap">Thiyagaraja Higher Secondary School,Srivilliputtur.<br/>H.S.E(Computer Science)<br/>Percentage:81.5%</div>
    <div className="absolute left-0 top-[417px] w-[1280px] h-[117px] bg-[#91c9ee99] border-0 border-solid border-[#000]"></div>
  </div>
  <div className="absolute left-[539px] top-[27px] flex flex-row items-start justify-start gap-[10px] p-[10px]">
    <div className="flex flex-row items-center justify-center p-[8px]">
      <div className="text-[15px] tracking-[.01em] font-['Poppins'] text-[#000] whitespace-nowrap">Home</div>
    </div>
    <div className="flex flex-row items-center justify-center p-[8px]">
      <div className="text-[15px] tracking-[.01em] font-['Poppins'] text-[#000] whitespace-nowrap">About</div>
    </div>
    <div className="flex flex-row items-center justify-center p-[8px]">
      <div className="text-[15px] tracking-[.01em] font-['Poppins'] text-[#000] whitespace-nowrap">Education</div>
    </div>
    <div className="flex flex-row items-center justify-center p-[8px]">
      <div className="text-[15px] tracking-[.01em] font-['Poppins'] text-[#000] whitespace-nowrap">Skill</div>
    </div>
    <div className="flex flex-row items-center justify-center p-[8px]">
      <div className="text-[15px] tracking-[.01em] font-['Poppins'] text-[#000] whitespace-nowrap">Certifications</div>
    </div>
    <div className="flex flex-row items-center justify-center p-[8px]">
      <div className="text-[15px] tracking-[.01em] font-['Poppins'] text-[#000] whitespace-nowrap">Projects</div>
    </div>
    <div className="flex flex-row items-center justify-center p-[8px]">
      <div className="text-[15px] tracking-[.01em] font-['Poppins'] text-[#000] whitespace-nowrap">Contact</div>
    </div>
  </div>
  <div className="absolute left-0 top-[1701px] w-[1280px] h-[832px] bg-[#fff] overflow-hidden">
    <div className="absolute left-[120px] top-[56px] text-[30px] tracking-[.01em] font-['Poppins'] font-medium text-[#000] whitespace-nowrap">Programming Languages</div>
    <div className="absolute left-[120px] top-[294px] text-[30px] tracking-[.01em] font-['Poppins'] font-medium text-[#000] whitespace-nowrap">Libraries</div>
    <div className="absolute left-[120px] top-[452px] text-[30px] tracking-[.01em] font-['Poppins'] font-medium text-[#000] whitespace-nowrap">Frameworks</div>
    <div className="absolute left-[120px] top-[595px] text-[30px] tracking-[.01em] font-['Poppins'] font-medium text-[#000] whitespace-nowrap">Databases</div>
    <div className="absolute left-[209px] top-[114px] w-[670px] h-[141px] flex">
      <div className="absolute left-0 top-0 w-[132px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[6px] top-0" width="50" height="50" src="PythonI345_204;345_195.png"></img>
        <div className="absolute left-[54px] top-[12px] w-[100px] text-[20px] font-['Inter'] text-[#000]">Python</div>
      </div>
      <div className="absolute left-[165px] top-0 w-[145px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[16px] top-0" width="50" height="50" src="Html 5I345_1143;345_1100.png"></img>
        <div className="absolute left-[70px] top-[12px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">HTML</div>
      </div>
      <div className="absolute left-[343px] top-0 w-[117px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[16px] top-0" width="50" height="50" src="CSS3I345_1146;345_1105.png"></img>
        <div className="absolute left-[69px] top-[12px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">CSS</div>
      </div>
      <div className="absolute left-[493px] top-0 w-[177px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[6px] top-0" width="50" height="50" src="JavaScriptI345_1149;345_1104.png"></img>
        <div className="absolute left-[67px] top-[14px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">Javascript</div>
      </div>
      <div className="absolute left-0 top-[91px] w-[99px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[12px] top-0" width="50" height="50" src="C ProgrammingI345_1195;345_1152.png"></img>
        <div className="absolute left-[68px] top-[13px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">C</div>
      </div>
      <div className="absolute left-[165px] top-[91px] w-[115px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[6px] top-0" width="50" height="50" src="JavaI345_1198;345_1165.png"></img>
        <div className="absolute left-[60px] top-[18px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">Java</div>
      </div>
    </div>
    <div className="absolute left-[209px] top-[359px] w-[727px] h-[57px] flex">
      <div className="absolute left-[193px] top-0 w-[156px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[9px] top-0" width="50" height="50" src="NumpyI345_1205;345_566.png"></img>
        <div className="absolute left-[71px] top-[15px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">Numpy</div>
      </div>
      <div className="absolute left-[365px] top-0 w-[227px] h-[57px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[11px] top-0" width="51" height="50" src="GroupI345_1208;345_579.png"></img>
        <div className="absolute left-[35.98%] right-[27.49%] top-[26.32%] bottom-[31.58%] text-[20px] font-['Inter'] text-[#000]">Seaborn</div>
      </div>
      <div className="absolute left-[578px] top-0 w-[149px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[2px] top-0" width="50" height="50" src="icons8-pandas-48 2I345_1311;345_540.png"></img>
        <div className="absolute left-[58px] top-[14px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">Pandas</div>
      </div>
      <div className="absolute left-0 top-0 w-[177px] h-[54px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[13px] top-[2px]" width="50" height="50" src="matplotlib-seeklogo 3I345_1314;345_339.png"></img>
        <div className="absolute left-[77px] top-[14px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">Matplotlib</div>
      </div>
    </div>
    <div className="absolute left-[209px] top-[516px] w-[590px] h-[50px] flex">
      <div className="absolute left-[395px] top-0 w-[195px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[16px] top-0" width="50" height="50" src="Express JsI345_1202;279_20.png"></img>
        <div className="absolute left-[85px] top-[14px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">ExpressJS</div>
      </div>
      <div className="absolute left-[213px] top-0 w-[163px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[10px] top-0" width="50" height="50" src="Node JsI345_1338;345_527.png"></img>
        <div className="absolute left-[72px] top-[15px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">NodeJS</div>
      </div>
      <div className="absolute left-0 top-0 w-[194px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[3px] top-0" width="50" height="50" src="TensorflowI345_1341;345_553.png"></img>
        <div className="absolute left-[61px] top-[13px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">Tensorflow</div>
      </div>
    </div>
    <div className="absolute left-[209px] top-[648px] w-[363px] h-[50px] flex">
      <div className="absolute left-[191px] top-0 w-[172px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[5px] top-0" width="50" height="50" src="MongoDBI345_1140;345_212.png"></img>
        <div className="absolute left-[65px] top-[12px] w-[104px] text-[20px] font-['Inter'] text-[#000]">MongoDB</div>
      </div>
      <div className="absolute left-0 top-0 w-[172px] h-[50px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[19px] top-0" width="50" height="50" src="MySQL LogoI345_1344;345_1180.png"></img>
        <div className="absolute left-[88px] top-[16px] text-[20px] font-['Inter'] text-[#000] whitespace-nowrap">MySQL</div>
      </div>
    </div>
    <div className="absolute left-[2px] top-[715px] w-[1278px] h-[117px] bg-[#bddef5] border-0 border-solid border-[#000]"></div>
  </div>
  <div className="absolute left-[-3px] top-[2533px] w-[1280px] h-[1113px] bg-[#fff] overflow-hidden">
    <div className="absolute left-[100px] top-[94px] w-[1006px] h-[247px] overflow-hidden">
      <img className="absolute left-[1392px] top-0" width="400" height="246" src="Sivasankar S - Python 1353_1398.png"></img>
      <img className="absolute left-[464px] top-0" width="400" height="246" src="Sivasankar S - Intro to Machine Learning 1353_1399.png"></img>
      <img className="absolute left-[928px] top-0" width="400" height="246" src="Sivasankar S - Intermediate Machine Learning 1353_1400.png"></img>
      <img className="absolute left-0 top-0" width="400" height="246" src="Sivasankar S - Data Visualization 1353_1401.png"></img>
    </div>
    <div className="absolute left-[120px] top-[360px] w-[1019px] h-[282px] overflow-hidden">
      <img className="absolute left-[1856px] top-0" width="400" height="279" src="pythonfor 1353_1403.png"></img>
      <img className="absolute left-0 top-0" width="400" height="281" src="nodejsq 1353_1404.png"></img>
      <img className="absolute left-[1392px] top-0" width="400" height="281" src="infosysdata 1353_1405.png"></img>
      <img className="absolute left-[928px] top-0" width="400" height="279" src="infosysangular 1353_1406.png"></img>
      <img className="absolute left-[464px] top-0" width="400" height="282" src="html 1353_1407.png"></img>
    </div>
    <div className="absolute left-[100px] top-[686px] w-[1006px] h-[306px] overflow-hidden">
      <img className="absolute left-[1435px] top-[13px]" width="400" height="280" src="newton 1353_1411.png"></img>
      <img className="absolute left-[946px] top-0" width="400" height="306" src="deeplearning 1353_1412.png"></img>
      <img className="absolute left-[466px] top-[22px]" width="400" height="266" src="GuviCertification - AM11120P52K76nZO80 1353_1409.png"></img>
      <img className="absolute left-0 top-[22px]" width="400" height="266" src="GuviCertification - 1l2t166u99UV4X19I5 1353_1410.png"></img>
    </div>
    <div className="absolute left-[120px] top-[45px] text-[30px] leading-[30px] font-['Poppins'] font-medium text-[#000] whitespace-nowrap">Certificates</div>
    <div className="absolute left-0 top-[992px] w-[1280px] h-[117px] bg-[#91c9ee99] border-0 border-solid border-[#000]"></div>
  </div>
  <div className="absolute left-[-1px] top-[3646px] w-[1280px] h-[832px] bg-[#fff] overflow-hidden">
    <div className="absolute left-[120px] top-[372px] w-[951px] h-[300px]">
      <div className="absolute left-0 top-0 w-[951px] leading-[30px] text-[#000]"><span className="text-[25px] font-['Poppins'] font-medium"> E-Commerce Website For Automobile Workshop <br/> 03/2023-06/2023<br/></span><span className="text-[15px] font-['Poppins'] font-light">Developed a robust E-Commerce platform for an automobile workshop, leveraging the power of the MEAN Stack.<br/> Key features include a user-friendly interface, real-time inventory management, appointment scheduling, and responsive design. <br/>Employ MongoDB for data storage, Express.js for server-side development, Angular for dynamic front-end, and Node.js for seamless server communication. Implement robust security measures and ensure scalability for efficient handling of workshop operations and online transactions.<br/></span><span className="text-[15px] font-['Poppins'] font-medium"><br/></span></div>
      <img className="absolute left-[25px] top-[237px]" width="50" height="50" src="GitHubI345_1369;345_1372.png"></img>
    </div>
    <div className="absolute left-[120px] top-[50px] text-[30px] leading-[30px] font-['Poppins'] font-medium text-[#000] whitespace-nowrap">Projects</div>
    <div className="absolute left-[120px] top-[101px] w-[951px] h-[246px]">
      <div className="absolute left-0 top-0 w-[951px] h-[231px] leading-[30px] text-[#000]"><span className="text-[25px] font-['Poppins'] font-medium">Student Performance Analysis<br/>07/2023-08/2023<br/></span><span className="text-[15px] font-['Poppins'] font-light">Its data-driven approach offers insights into student achievement,identifies areas for improvement and aids education in making data-informed decisions to enhance learning outcomes and educational strategies. <br/>Student Performance Analysis in education employs Python for data analysis, using tools like Pandas and visualization libraries</span></div>
      <img className="absolute left-[19px] top-[181px]" width="50" height="50" src="GitHubI345_1392;345_1384.png"></img>
    </div>
  </div>
  <div className="absolute left-[-3px] top-[4478px] w-[1280px] h-[618px] bg-[#fff] overflow-hidden">
    <div className="absolute left-[131px] top-[108px] w-[801px] h-[403px] flex">
      <div className="absolute left-0 top-0 w-[684px] h-[120px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[13px] top-[10px]" width="75" height="75" src="Phone357_1425.png"></img>
        <div className="absolute left-[128px] top-[25px] w-[343px] text-[40px] font-['Poppins'] font-light text-[#000]">+918637407373</div>
      </div>
      <div className="absolute left-0 top-[128px] w-[801px] h-[96px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[14px] top-0" width="75" height="75" src="Email357_1428.png"></img>
        <div className="absolute left-[129px] top-[11px] text-[40px] font-['Poppins'] font-light text-[#000] whitespace-nowrap">sssivasankar73@gmail.com</div>
      </div>
      <div className="absolute left-0 top-[227px] w-[702px] h-[75px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[11px] top-0" width="75" height="75" src="LinkedIn357_1431.png"></img>
        <div className="absolute left-[126px] top-[19px] text-[40px] font-['Poppins'] font-light text-[#000] whitespace-nowrap">sivasankar2002</div>
      </div>
      <div className="absolute left-0 top-[315px] w-[706px] h-[88px] bg-[#fff] overflow-hidden">
        <img className="absolute left-[15px] top-0" width="75" height="75" src="GitHub357_1434.png"></img>
        <div className="absolute left-[130px] top-[15px] text-[40px] font-['Poppins'] font-light text-[#000] whitespace-nowrap">Sivasankar0312</div>
      </div>
    </div>
    <div className="absolute left-[66px] top-[39px] text-[30px] font-['Poppins'] font-medium text-[#000] whitespace-nowrap">Contact</div>
    <div className="absolute left-0 top-[501px] w-[1280px] h-[117px] bg-[#bddef5] border-0 border-solid border-[#000]"></div>
  </div>
</div>)
}

export default Navbar