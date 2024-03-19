import React from 'react'
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation';


function Home() {
	return (
		<>
		<Navbar/>
		<div id='animatedTool' className='text-orange-700 bold font-extrabold ml-10'>		
			<TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    `Upskilling Made  PRACTICAL	`,
    1000,
    'Upskilling Made EASY',
    1000,
	'Upskilling Made AFFORDABLE',
	1000
    
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>


</div>


<div className='flex  justify-around'>
	<div>
	<h6 className='justify w-[48rem] ml-7 mt-10 text-white flex'>
SAARTHI is the one-stop destination for your upskilling journey. Brace yourself to find the best job-ready courses and high-end technologies available in the sector. And if that weren't good enough, get the highest quality course content at the most affordable prices!
What are we waiting for ? Let's push Start!
</h6>
<div className='w-full flex justify-center my-5'>
<button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  rounded ">Take me to course</button>
</div>
	</div>
	<div>
		
<img src="https://pwskills.com/images/homePage/hero-bg.png" className='max-w-[60%] ml-48 mt-[-150px]' />
	</div>
	
 </div>
 <hr />

 <div class="gradient-cards">
    <div class="card">
      <div class="container-card bg-green-box">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4547)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4547)" stroke-width="2"></rect>
          <path d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z" fill="#54E8A9"></path>
          <path d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z" fill="#2FCB89"></path>
          <defs>
            <linearGradient id="paint0_linear_1366_4547" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2FCB89" stop-opacity="0.7"></stop>
              <stop offset="0.489583" stop-color="#2FCB89" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#2FCB89" stop-opacity="0.7"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_1366_4547" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
              <stop stop-color="#54E8A9"></stop>
              <stop offset="1" stop-color="#1A3E31" stop-opacity="0.2"></stop>
            </radialGradient>
          </defs>
        </svg>
        <p class="card-title">EVERYONE STARTS FROM 0</p>
        <p class="card-description">
"Remember, everyone starts from zero; it's the journey of persistence, learning, and growth that transforms zeros into heroes."</p>
      </div>
    </div>

    <div class="card">
      <div class="container-card bg-white-box">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4565)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4565)" stroke-width="2"></rect>
          <ellipse rx="21.9462" ry="22.2891" transform="matrix(0.964749 0.263173 -0.254526 0.967066 60.1463 63.0804)" stroke="white" stroke-width="1.00101" stroke-linecap="round" stroke-dasharray="4 5.01"></ellipse>
          <ellipse rx="17.4359" ry="17.5832" transform="matrix(-1 0 0 1 60.1466 39.5834)" fill="white"></ellipse>
          <path d="M63.5924 38.93C64.4717 38.4692 65.0312 37.6495 64.9014 36.2874C64.7314 34.4228 63.2378 33.7982 61.2597 33.624V31.0427H59.721V33.5522C59.3212 33.5522 58.9118 33.5626 58.5019 33.5725V31.0427H56.9631V33.624C56.3974 33.6416 55.7384 33.6328 53.876 33.624V35.3039C55.0905 35.282 55.7283 35.2019 55.8744 36.0003V43.0678C55.7815 43.7013 55.2869 43.6103 54.186 43.5905L53.8765 45.4649C56.682 45.4649 56.9641 45.4754 56.9641 45.4754V47.6858H58.5029V45.506C58.9224 45.5164 59.3319 45.5164 59.722 45.5164V47.6863H61.2607V45.4759C63.8385 45.3323 65.5619 44.6666 65.7917 42.1774C65.9713 40.1803 65.0526 39.2888 63.5935 38.9305L63.5924 38.93ZM58.5318 35.4167C59.4008 35.4167 62.1186 35.14 62.1186 36.9942C62.1186 38.7661 59.4008 38.5612 58.5318 38.5612V35.4167ZM58.5318 43.6004V40.1381C59.5708 40.1381 62.7528 39.8412 62.7528 41.869C62.7528 43.8256 59.5708 43.5999 58.5318 43.5999V43.6004Z" fill="#2E3042"></path>
          <path d="M82.5643 62.834C92.1944 62.834 100 70.7058 100 80.4172C100 90.1286 92.1944 98.0004 82.5643 98.0004C72.9342 98.0004 65.1284 90.1286 65.1284 80.4172C65.1284 70.7058 72.9342 62.834 82.5643 62.834ZM92.0516 84.2822H76.3964C76.2271 84.282 76.0646 84.3491 75.9441 84.469L72.8514 87.5626C72.8065 87.6073 72.7759 87.6645 72.7634 87.7269C72.751 87.7893 72.7573 87.854 72.7815 87.9128C72.8057 87.9716 72.8468 88.0217 72.8994 88.0568C72.9521 88.0919 73.0139 88.1104 73.077 88.1098H88.7323C88.9015 88.11 89.064 88.0429 89.1845 87.923L92.2772 84.8284C92.3217 84.7836 92.352 84.7264 92.3643 84.6642C92.3765 84.602 92.3701 84.5376 92.346 84.479C92.3218 84.4205 92.2809 84.3705 92.2285 84.3355C92.1761 84.3004 92.1145 84.2819 92.0516 84.2822ZM88.7323 78.4665H73.077L73.0029 78.4742C72.9476 78.487 72.8968 78.5146 72.8556 78.5539C72.8145 78.5933 72.7846 78.6431 72.769 78.6981C72.7534 78.7531 72.7527 78.8113 72.767 78.8666C72.7813 78.9219 72.8101 78.9724 72.8503 79.0127L75.9452 82.1074L76.0215 82.1733C76.1305 82.2502 76.2612 82.2942 76.3964 82.2942H92.0516L92.1257 82.2865C92.181 82.2737 92.2319 82.2462 92.273 82.2068C92.3141 82.1674 92.3441 82.1177 92.3596 82.0627C92.3752 82.0077 92.3759 81.9495 92.3616 81.8941C92.3473 81.8388 92.3185 81.7883 92.2783 81.748L89.1834 78.6534L89.1071 78.5874C88.9978 78.5086 88.8667 78.4663 88.7323 78.4665Z" fill="white"></path>
          <path d="M92.0507 84.5023H76.3954C76.2262 84.5022 76.0637 84.57 75.9432 84.6911L72.8505 87.8164C72.8056 87.8616 72.775 87.9194 72.7625 87.9825C72.75 88.0455 72.7563 88.1109 72.7806 88.1703C72.8048 88.2296 72.8458 88.2803 72.8985 88.3158C72.9511 88.3512 73.013 88.3699 73.0761 88.3693H88.7313C88.9006 88.3695 89.0631 88.3017 89.1836 88.1806L92.2763 85.0541C92.3208 85.0089 92.3511 84.9512 92.3633 84.8883C92.3756 84.8255 92.3692 84.7604 92.345 84.7012C92.3208 84.6421 92.2799 84.5916 92.2275 84.5562C92.1751 84.5208 92.1136 84.502 92.0507 84.5023ZM88.7313 78.627H73.0761L73.002 78.6347C72.9467 78.6477 72.8958 78.6755 72.8547 78.7152C72.8136 78.755 72.7836 78.8053 72.7681 78.8608C72.7525 78.9164 72.7518 78.9752 72.7661 79.0311C72.7804 79.087 72.8092 79.138 72.8494 79.1787L75.9443 82.3052L76.0206 82.3718C76.1295 82.4495 76.2603 82.4939 76.3954 82.4939H92.0507L92.1248 82.4861C92.1801 82.4732 92.2309 82.4454 92.2721 82.4056C92.3132 82.3659 92.3431 82.3156 92.3587 82.26C92.3743 82.2045 92.375 82.1457 92.3606 82.0898C92.3463 82.0338 92.3176 81.9829 92.2773 81.9421L89.1825 78.8157L89.1062 78.7491C88.9968 78.6694 88.8657 78.6267 88.7313 78.627ZM92.0507 72.8259H76.3954C76.2262 72.8258 76.0637 72.8936 75.9432 73.0147L72.8505 76.1411C72.806 76.1864 72.7757 76.2441 72.7634 76.3069C72.7512 76.3698 72.7576 76.4349 72.7817 76.4941C72.8059 76.5532 72.8468 76.6037 72.8992 76.6391C72.9516 76.6745 73.0132 76.6932 73.0761 76.6929H88.7313C88.9006 76.6931 89.0631 76.6253 89.1836 76.5042L92.2763 73.3788C92.3212 73.3336 92.3518 73.2758 92.3643 73.2128C92.3767 73.1498 92.3704 73.0844 92.3462 73.025C92.322 72.9656 92.2809 72.915 92.2283 72.8795C92.1756 72.844 92.1138 72.8254 92.0507 72.8259Z" fill="#2E3042"></path>
          <ellipse cx="37.4359" cy="78.7687" rx="17.4359" ry="17.5832" fill="white"></ellipse>
          <path d="M43.9081 78.9791L37.4362 82.8079L30.96 78.9791L37.4362 68.2188L43.9081 78.9791ZM37.4362 84.0374L30.96 80.2086L37.4362 89.3434L43.9124 80.2086L37.4362 84.0374Z" fill="#2E3042"></path>
          <defs>
            <linearGradient id="paint0_linear_1366_4565" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.7"></stop>
              <stop offset="0.505208" stop-color="white" stop-opacity="0"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0.7"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_1366_4565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="#363437" stop-opacity="0.2"></stop>
            </radialGradient>
          </defs>
        </svg>
        <p class="card-title">Multi-SkillSet</p>
        <p class="card-description">"A jack of all trades is a master of none, but oftentimes better than a master of one. Embrace versatility and endless potential."</p>
      </div>
    </div>

    <div class="card">
      <div class="container-card bg-yellow-box">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4557)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4557)" stroke-width="2"></rect>
          <path d="M74.2105 36C73.373 36 72.5698 35.6839 71.9776 35.1213C71.3853 34.5587 71.0526 33.7956 71.0526 33C71.0526 32.2044 71.3853 31.4413 71.9776 30.8787C72.5698 30.3161 73.373 30 74.2105 30H86.8421C87.6796 30 88.4829 30.3161 89.0751 30.8787C89.6673 31.4413 90 32.2044 90 33V45C90 45.7956 89.6673 46.5587 89.0751 47.1213C88.4829 47.6839 87.6796 48 86.8421 48C86.0046 48 85.2014 47.6839 84.6091 47.1213C84.0169 46.5587 83.6842 45.7956 83.6842 45V40.242L65.3905 57.621C64.7983 58.1834 63.9953 58.4994 63.1579 58.4994C62.3205 58.4994 61.5175 58.1834 60.9253 57.621L52.1053 49.242L35.3905 65.121C34.7949 65.6675 33.9972 65.9699 33.1693 65.963C32.3413 65.9562 31.5492 65.6407 30.9637 65.0845C30.3782 64.5282 30.0461 63.7758 30.0389 62.9892C30.0317 62.2026 30.35 61.4448 30.9253 60.879L49.8726 42.879C50.4648 42.3166 51.2679 42.0006 52.1053 42.0006C52.9426 42.0006 53.7457 42.3166 54.3379 42.879L63.1579 51.258L79.219 36H74.2105ZM36.3158 78V87C36.3158 87.7957 35.9831 88.5587 35.3909 89.1213C34.7986 89.6839 33.9954 90 33.1579 90C32.3204 90 31.5171 89.6839 30.9249 89.1213C30.3327 88.5587 30 87.7957 30 87V78C30 77.2043 30.3327 76.4413 30.9249 75.8787C31.5171 75.3161 32.3204 75 33.1579 75C33.9954 75 34.7986 75.3161 35.3909 75.8787C35.9831 76.4413 36.3158 77.2043 36.3158 78ZM52.1053 66C52.1053 65.2043 51.7726 64.4413 51.1803 63.8787C50.5881 63.3161 49.7849 63 48.9474 63C48.1098 63 47.3066 63.3161 46.7144 63.8787C46.1222 64.4413 45.7895 65.2043 45.7895 66V87C45.7895 87.7957 46.1222 88.5587 46.7144 89.1213C47.3066 89.6839 48.1098 90 48.9474 90C49.7849 90 50.5881 89.6839 51.1803 89.1213C51.7726 88.5587 52.1053 87.7957 52.1053 87V66ZM64.7368 69C65.5744 69 66.3776 69.3161 66.9698 69.8787C67.562 70.4413 67.8947 71.2043 67.8947 72V87C67.8947 87.7957 67.562 88.5587 66.9698 89.1213C66.3776 89.6839 65.5744 90 64.7368 90C63.8993 90 63.0961 89.6839 62.5039 89.1213C61.9117 88.5587 61.5789 87.7957 61.5789 87V72C61.5789 71.2043 61.9117 70.4413 62.5039 69.8787C63.0961 69.3161 63.8993 69 64.7368 69ZM83.6842 57C83.6842 56.2044 83.3515 55.4413 82.7593 54.8787C82.1671 54.3161 81.3638 54 80.5263 54C79.6888 54 78.8856 54.3161 78.2933 54.8787C77.7011 55.4413 77.3684 56.2044 77.3684 57V87C77.3684 87.7957 77.7011 88.5587 78.2933 89.1213C78.8856 89.6839 79.6888 90 80.5263 90C81.3638 90 82.1671 89.6839 82.7593 89.1213C83.3515 88.5587 83.6842 87.7957 83.6842 87V57Z" fill="#FFEE24"></path>
          <defs>
            <linearGradient id="paint0_linear_1366_4557" x1="-0.0208152" y1="-0.102528" x2="119.899" y2="119.817" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFE34B" stop-opacity="0.7"></stop>
              <stop offset="0.510417" stop-color="#FFE34B" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#FFE34B" stop-opacity="0.7"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_1366_4557" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
              <stop stop-color="#FFEE24"></stop>
              <stop offset="1" stop-color="#302A1A" stop-opacity="0.2"></stop>
            </radialGradient>
          </defs>
        </svg>
        <p class="card-title">Get Tremendous Growth</p>
        <p class="card-description">
"Strive for your dreams with unwavering dedication, and watch as they blossom into tremendous growth, transforming aspirations into reality."





.</p>
      </div>
    </div>

    <div class="card">
      <div class="container-card bg-blue-box">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4582)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4582)" stroke-width="2"></rect>
          <path d="M90.9405 64.775L88.0155 69.55L85.1155 64.775H80.0655L85.5155 72.85L79.5905 82H84.4905L88.0155 76.175L91.5155 82H96.4405L90.4905 72.85L95.9405 64.775H90.9405Z" fill="#87A1FF"></path>
          <path d="M44.9833 35.52L27.3433 43.92V52.53L35.1833 49.17V82H44.9833V35.52ZM71.37 35.52L53.73 43.92V52.53L61.57 49.17V82H71.37V35.52Z" fill="#87A1FF"></path>
          <defs>
            <linearGradient id="paint0_linear_1366_4582" x1="120.194" y1="119.827" x2="-13.1225" y2="17.1841" gradientUnits="userSpaceOnUse">
              <stop stop-color="#61A0FF" stop-opacity="0.7"></stop>
              <stop offset="0.489583" stop-color="#61A0FF" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#61A0FF" stop-opacity="0.7"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_1366_4582" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
              <stop stop-color="#87A1FF"></stop>
              <stop offset="1" stop-color="#16161D" stop-opacity="0.2"></stop>
            </radialGradient>
          </defs>
        </svg>
        <p class="card-title">Be a 11x Developer </p>
        <p class="card-description">"Dream big, work hard, and aim to be a 111x developer, because in a world where 10x isn't good enough anymore, excellence knows no bounds.".</p>
      </div>
    </div>
  </div>
  <hr />

<section id='ouur-course'>
<h1 className=' text-2xl text-center mt-5 text-orange-700 bold font-extrabold ml-10 underline'>Our-Courses</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 justify-around "> 
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAACmCAMAAABqbSMrAAABlVBMVEX///85OTldQDd4t0MkYY9YqlBJnUr8/PwAAAAhXIslY5I4ODhl4v9k4P9l4/81NTVh2vv29vYqKirc3Nx8vUUoKChvszN0tT3o6Ohn5/8fWIhuszITExOVxm/u7u7P5L6JiYk3hTvr8+S+26jl7+avvs4fHx/X19d/uk++vr5HR0eHvlqsrKxLjk/Nzc1ZsFJdOjYjfSnZ6stsn264uLgpa5ilpaUfAABPNi5iiKkAHzo+lbyenp5UVFRDcxZqojoweKMjBQBDLSY8JyBUv+JHp8xkZGRNdCxBmsE2ha4AJT+eynz1+vG01Zp/f38ZSm4UAAAAFTU3aQAAMU8rFAtThCgRP19Pt9plmjdcRjhebXpbVTttbW03SlkUMkd2iWnN2ePF2MbU3c1HOTSZoalJXG0ACC6FnnJ/ipSwwKRniE4rQ1VTdEHFzb9alUpaYj1XbUBaUDqaqJCToIqVq4VTg0WfqLB4lGNkplmnpYVuc1F0YlCZknhzfoiHemSutqihwaOBrYN/nbd3pnmdtMgKdxQATYO+0eVSAAAVx0lEQVR4nO2di18a17bHUUhgkHF4hEcAFdGAIKHRAjHyEAVEETVGFGvVPIw3JibtOSdNc3pPc5s2Pfm7z9p7z3sGZMaY3vP57N+nrQMmiz3fWWvttdfsoRYLFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUV1XXK7sumQNmQeQvJq1rwkDEkzVuwTD97+vTN02fT5i0MILuvsNp5eP/+Muj+w4enW7lxoxaSpbJDEmfGwvOzxf/ZWUTa2dk5Pk8ZtWCZfvmi+ehRBevRo+aLl9N2oyYGkq90+rBTW1gYJlpYWKktP1zNGBhvMpZwOBJeL8eNgDjOm4g6HKtGmCXPT3Z297cZxobEMNv7u4uLhynP4BamX756VDlYWrJabyFZl5b2Ko9evfzynpZdvd9ZGVZrobZciw0YGCnwLT83pBTnjToSA1s429ndZmxOp02QE46393cung8Iffqnyt4BQmUVhV4cVJovng1mYUD5yvdrCxpchFmnExtguMm0I6qmxTPzO6KxAXwke7G4D7RsaiFmiyfPBwir9ovKnlUOS4Jm3au8uEJGVMkee6jAde97FbJa5hILnqNeuLD8jkTqEgvjhzv7OrR4ZoDsInvZabx8BLi0tHhmgOylgdDuJ99pR+VdN1VetvLwqK+TZaMOb29cyMsSjq2+FlKtXaYXLoJsf+e87/lOv68s9cSFkS1VXn0RJ8t0ako899598/qeOi5P+1zgkiMx0pcXyOtI+3pbOO/jXgKy7cWzPuf7rNnHvUQna765+oRZuq/O9T98c+Pm9ypiw7VaqtdnbV3iXryTRf3ZXhY+LG5fggsRY1oXvl4WnlYOLsGFkR1UfrtqWG7dV4XjPeB14+bNv6uTf225B7GjgXgNDY1EHT2IHS6K4cjwFYUk6R2nbfckqW/h5aP+4SgjdsVEVnqoxwuA3fxOTWxFn9iWo0+2VyoR1SUm8WLyxbViXsaMgXcaa1Xxjd0LXWJPB+SFE9mVfCyj8a9XiBcC9oMaGESlzvmWBuc1NBT16pzvucSryN6+fZutrwuAwut19M5oIywSO9aJyme66T4YCOr72BvzxJLqWvXej5gXAnbznTqNDdfKmtGmBoxHIs5RDqkt5HaE/MVUWbbeAESueh4hY5xddhTe6bIuASHkscNxtQVPUy9/RWY3N4M6yG7tNZNmidlPVfPj8Hc3bojAbv5NQ6yjrg3GEwkDvBAxdQkbOhHzPdN1dcMQhI1Rl3s9bAtX3S5XAwI0vOaqi3lse/G5+nTf72l5BQIT8Jv2RkSL7FblveaqDaitjgoIFBQyYNrEv3A/oxztqsMQL1RdqBaGZ7vi/Oh0u/M4EPN11+1GuOhyufM4Fhm3uypVF62s0sLLijYag5s8kviYTmBW/mF4QY/lUyf84b9/I/cwvaA8VQRlykgCI4qmFRZyO1KGr7JuIXc1WFeddXX59B+uizGJ0tihwkHaTXUCC0Y24vCL+Rn8Y2ImoEljzaypoEyrA1J0MB7YzR/VwIZhXSkbrcGAROIcJdnl9UgBaWPWR+tStnez7jUh1Ye7o0URGLiYooPykzogI7PzFuRakWAwOAWDbWtS2a29x2aCMntfTeM7gZcA7AeNi62syC5OznFpga9VYkiWc39elBVccmBrLMs2ZMDWJA9z7p7J5tppVUAGglMWBIlEYmAGpbK4KpVBbWGkYySorHGw12pgNzQFP7iYdHE4v3FeSheTV/gyYFBfsDBDCsQUHgYz5aLMxZQOBtHYhjenggHxjVkcnrOKuAQX67lm6KmkugQbvnfzhgqYThZbORVdLCXP+CNev9/r9XuFpOZFGpF+C+J/lUiLDpKTORhUFa66cASwPhdZV1EvhyEXE0/XIy/BgoExQieiZThhlSEz5WIx9RQ5/P03GmDaen+hUxAu76qUwUb8Q7Fc0pdMxdLY60aGssmkLycS82d8SV+G411MdJCzffkSMs+60UsoLNxs93P48xrrroYRqLCbrcqBbbfEvvXLioyXbvzhKMWpTE6s8tZoFvOsaBzstQ4wbS1WO+Iv77jUAeP8JeGCeUq4c+GN4YvCV7X4lb3M//moYMHXUi4c3Ww+zOTXi3XWXUdyu+vF9TwTDvP1hqjWuXC6r+Q1a1svwyOReWBCInZr75XRiVKb8skqUgXsrk5M8t6cEyOS4+Sdmywm5s8hemnMiEujv7ElrAn8HD/YnxflDsaE62y37mahbGVdt5FcLH5V77L1sBytc/+Mnzjaj2SONKUKPFSPBQk/EqyzIstbS02jt2dKmoj87sYNLTCdmFwukLbUVlSIRw694cnFtkq4aZb1j6CshSAmyWESDjNiAHMOfrCHsohkmPWuG0i53PDfbrG4vr5eLDZYeOUCbu7uuk2W9sWYfCOLyMiEJc5HI8EUDM6MjY3NkjVlYMxiGZOcD2LSYNovr/RJYTJgP+qsj/BH2dOix6D2c45LQF5PHCF2OBK5Mr4ukNL8JTjw+aUZwEFmWs+FtCqyFd2jtwFMscpgfyIKN2BRVC0CwtFR91peRMa0npOYlM+RCBjxr2A8vhm0Bjfj+M/Ep2YAVFAFbO9xj05RL6m70uK6WwVM3XuFJLaK48EjVPncEeKVIK+8abj040M4KGP4wnDcKsYrWxNEj/BgQ4uyOhWINNZREltn2bxNaIM53a5GGJZM6w30B4pCYeZsnRP/kKcwCVgACotAcF481zYQUwM7eG1snhzXLIvkOV8GTKewSOMU5BOqVj/E4TgnlhNbgosRz/MlvMjptuRNjUQZW8juCLwaLqDhZKDeaoTdqPximGID3oDajHXniy7kcoipUKc5dw9JGpQvi5TAIptowpydnUXro/mIFpjBJKaT89/pAtNm/YUaTiBCzufKcK0LUgmbAD5Zr5TbSij7ZxRrKC+HLfy8ywdYd5RtIIdCeNZcbuBUdY+yoywUX1CCdeu4zmfCRbdQqDn3jzGw6aZ8KlQCm7e0oaAAwZFFE5JWazNj6I5IbnlAYNo+4kInhz6qIABDLlVO+AVFAdD4CPY+bpVPEz6vYg3lTWBgzwkwZm0UdXMwCJTjoVrNu7FcVVTNQgYjqQ71e7oMyfrH2IJiXaQFNhsBYtbgRrs9G9QCKxjK+jnNJGkUWImfJL3onmVGJjQl8iUXTveQ7srKpoY3gS2c7wrll5CcwjAt1hFCFgNjAU+4C2/xv4YVACnInNsXGNizPsCgyGhPbG7MWgMEmxpYxRiwzBWALWfQFCUC07tFuyosg3CdEVOtObkoAUaqirzY1UHHLDgYTJTExYAUasNKLWt+jQTAsIU+wALWOBlKOz4xFtEJyUrJ0DQ5ODBtDlvO+C4DtkWAjSSQu1lCyojEwOzIwwRgQsEASQyymY1p8B6GgK3J2hYMv0YaBFgwOBUXhjMfuDIwnZDUnyV1kn5HCQwl9ZhKZULIX+A/TeliXIIHRijUodgSVtlu1FxFyd/NpzMbOhC7FnzWHwRYIBCJBGc3NicQts2ANocZA5bSJn39OkxbVgAwdLoFARjKU2mvUnxRhiq0kGJZRN7349Plkz6keFed9KIhR9VRXmcao4AJVRFwVK+P4jhk8l0XH50wS2ILfWZJ68QE8AkGAdsGqit0kr4hYNqyokelr119r5ziwabks+SRLKuPcHxRxg2hP7cas4iLSgHYCLbwc0vI5W6XuwHVPuT8bp51QdQxRfA1CE6Aya5DuY8rM1gk8dkMFpNkluwNbAYlfvwqCItyLbAlg7OkR1O4Dg/f1AOmXRrVyvh0Qz3qMC5dLpOIxDt2Mgmc+LPyQsxfxqebFApXJl+HNXYjHwZfCqOVESr00T82/Ar8jnGuuaG4rUqFK1lMvutduLYt9rEI1iZOaZpKP2NsMandDibP+n0W37A0woMVuztoaS1V+kMJH5/lcU8nlBgZ4dDASrI0Fj3CFkJSdwfWRi4o5N1uZ9jmHhWb+WgSyIcZmC5dt13uNall0fpAKv33PZdGKBAt8fmJifk2LMx01pKvc8a28qyqG9TDwz/qANOmMFh848GKi28MJiXsPfSjvFXyIk9DnFB9gVdLYqWBgMWwBc+x7A4Is15nUaqvN7qQ98n7TgjIeqNOJsyirF3BtIiFHotvkvQ328K5xme1a8m9xwb7O9r2zvA9nZDURuRCp0QGu8VHGWnkpNIJL8f5E1sekrFG/Ling/0KrTYtIU6oLTgHn28/7Mr6YQwEJoC5jXoWmBwpxeAN1PGpMoqW60mGWHimbu9IwKwB68bEfDw+P7WBmj2q9o61+dZgkzr5UAtMcxPkpnpn3TDK+Xy2FFv6xJc8qdjRVgnXXWjtjSsKHhJpIIq1hXeITx85RQMR6gt2vVoEjwJeqIM4isjVG8VqnlV2XJ27ZznS3rHLdqGgBuIU6X1hYKhtiIXewj1XRQOxZLDl6jld6eNiPK4b2ubOcGeVD/5xcQewt6z4bFTY456PGIYkKIXaInHEt/9CLcW2MHTnG3fB1l1sMV/Nw+S5Fg6H4Q1lTx8i8oPQ1JdtEwjCxIg3BwStPDBRASvq9s8rWtQGc75+TP5NdSNXx8EWOjHBl7fEPM4N5cRPT6760U0QdELS3IknTL4nNhIVL+7hrs5NENzuYathp7DURiuiojIiC4KFN7LSNUju4G6gbvSGLPqCQZzOFAwhIo1uF/BpWoiytj7vYNoibLiWzggFX1a6zcb507FU0pfMllax33lLIZ8vK62IuCGfzxfKYBfzpsWLm5JtFJDdZkPFv7tal3YOKG7kos0CogVPU3GbbYNfDcVluPiNA/J7b7cOmgXjuwV05klxc0WvhTeaI6XpWF6Ncsr7kpzitiT/muPnSOninuzr3si12YCWbInZGG0oOvoyC/L7bKIzxaVsFZkhGweUe1Iqjw1HJCr2dVyMBOU/CTDN7h2c8qVLkzO6d4dP+dJegV5bBRjIZ+y6WI4pge2eZaRVzbhqL0ogODs2C4meAAryGwdUWwUOmiXjT+TouxipXr/tUVJABtvKye6ADhnevIMdTKoYPRcyF5OFJBRgUJUJbR1YdEshCRksJj/bnyrqzTvB4MxmPD4bgIUk9reJoHr/jikHgyym42KY2Dcv9FeRaLtTRh77WeMu5k9n5BsAU9J+YNRnJdUDqvshh7nYNVJ9wSwp2yrQOszIl83j2v2HwTGyOUBn4wB2sD1zDgbzv6ZlMUwS/y//1OeFpkjFLfYjo/uduGhJYcF+uCvFJEyGsMoOo52aaNNmd9RVR3sFxEYrdrD9E9XZwkSpIUYi0YLmTM2GOqjB3ubMOBiqxXSCEvnYLz/pxSPwOsoo94eGvAaDMrqlCoaQlPdRc7/qrDZYF0lZ4SLa4rqeF1v5OCAXY6qztb/QbkG0BnCut+huHGi+NzFFEvlqK3rE/veXX/6lw2u4Uy5kVa6cjV4OSaZEOaMea2pHup0La+zR29iv+NQPvob2VYsO5gxDQKotjL/T2eQajIxNbVrVyQtp753JgETK6TzyB/rlVz1etVNlOGEVjKQx/xCMVW3huWyTWAPWkN11qSsRzqO1d1eoL5xM66ygPdtnTR1iaGGkgwslMJMBiWQv6PTFegADXjqfZI8NTszL6VnwnC/Ktgw4bcpnQRiYFMR4ZHaPda6Zxf5Gd+O5noDX24zpbefos7SPGkFM/vqrDq9aLKf3SZ6BiXm9wEvHwvhAjxph/zrW9w77m4qej10DLzjfwrIm8+sAW+iAf+l/EhAbaKurf0SfF/GxAXhtt44LvSy8qVz6MBt5nK2kSYGGieVq6lUlANM8/lfudbYWu6eQGGCuTPSz8PySxyXxA5Otw0KqhwWLJ/vqksclcT3xrnRF/yKfVV5WheW//k8Vjp2j3mNFFtKX1WNcop8Fuyd13Nru98Skc3v35ENGJ3+JY/C9qBz0czL0SO7jXlFiTB5fTONkcq10TmOZbL89oR7fVr8nmNFG4MssJD8s7m47eyBzMvuts1J/C/bQb83Kgd4T3wTXQaX5tt9VNyL7ePZouQeyhZVObauQS2qqAZWFVLk3Mr93AAuh1Bkgs2mZORGui61CKum5ZAzJtxiZhhn5XgFwr77EDckTSh3VOto7SSu1zimcbDZ02YWxe0K5Vb9XJ/tzfg5buGyoYCFzdtLa3yZfvsCzgppie7d1HMsMcrKeUBaQ7S3hr6wQWMHB0l4TcGUuPwsDguGmYmlgVltZ4AWwOqereKj9Ly1vYdyHNp37OU7am8l5E5whC7nz41Zrd397m2zZ3N7fb7UuDomFwc4i+4/3wGzvYInXwd5epfn+LVwyX38XNyz4sGSudFQ+rXXQV8l0aqflo1ghl0oOdLLCcDOx1TTnT0QT8I83bdjCuC+bOT88uzjBXyVzcnJ89qFkdAzJ1G+P379uNtE3yTSbr98/flvIpAa7ZAZl94z7ktlcJlPAyuRS2WRo3MgHCRYKCgtGRqq0kDFnIZTMpnLys/AZOgsjsqOPC/mwQgiW4c9RWBg3M9AvY2H8Smdh9POw/sstfAkTVFRUVFRUVFRU/0/labdlr+xtk6t7Dy+zReOV/jKWXTwRe/saS9ePd0Hit1H+jl6Z+bSjNNFQztwwnuSRqtUHT8z9ffSlKDMzG2ToYzNjZq1crruTSPyLp3NwPGfm+08daK8rKFowN4w7aL8A3nn4hzkDls2ANRjYREf2Wbwx8ZoEwO5OzvEu9mnyLrw2AyzKeWOoUVDq86WH/QTAqnfu/PmAsX2+Y87CFH7kG21FuXZgHycnf8fH03DwySywxJW+zfJOmHmAfj5gyE/jAmCz1iDaqX/dwOam707exfny49zcM/PATPoWkQDsz7B5YIGJgDUQ/xrAPk7OPUXH307ehX//Ug8DYCaTGACb3wgiF7t+YM/mJr+Fw+m5yY/mgflTSZBZajywJzZb+Ik5CwhYPGKNxL8CMAvJ9L+jQ9PAuEQ0GnXETA4Dkn7+wYPqZ/OzJAJm2cDPeV8/MIjJlxY7pDLLFYDhOqxkchikrGBs+ScmDRBgcchi818B2DSKyadzcx+vACyRtF+hVkce9scfNpvNrIMRYGj74exXAIb+2/40+e/pqwD7ArMkpLDPT0xaIMDaQXCxrwDs49zkJ5L5/1JgaJKsmrRAgOHHSr8CsGm8JkK1xV8LLMRcaZaEH230/LL12oEhTpOTbctVgGXHkUw2O75EpY+Bkeexrh8YxOTkJ/Ta/CyJ/icqI16T06QA7AnMlua2OwvALNftYXMo1UNMzv2bVPtzproV3gRRNGZuGHc+h4lnOcOf/zRlYSoSIcAmIpHIrLlRDKLpp0/t/E+L/KdBhVJZrJTJUt9z5w75m0+EA6NqT0zwDcT4/Hy7/5+loqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi+q/WfwAa0+j2fLT+1gAAAABJRU5ErkJggg==" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Wanna know how this webiste is so catchy this project might be your best freind</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">599 ₹</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" 
		src="data:image/png;base64,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" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Have you ever wondered how Shopping apps know already what you want to buy </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">599 ₹</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTO_V4HjbEnDrneINTURZMCrs9O9vIF_aZ6g&usqp=CAU" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Are you intrested in learning how Mobile app works under the hood here is ur go to course </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">599 ₹</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
</div>

</section>
<hr />
		</>
	)
}

export default Home
