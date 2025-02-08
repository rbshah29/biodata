<template>
    <div class="container mx-auto px-4 py-8 ">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gray-200 shadow-xl rounded-lg overflow-hidden">
          <div class="p-6">
            <div class="flex">
              <div class="w-full h-full">
                <img src="./../assets/images/one.jpg" alt="Profile Picture" class="h-1/2 rounded-lg shadow-lg">
              </div>
              <div class="ml-3 mt-4 md:mt-0 w-full">
                <div>
                  <h1 class="text-3xl font-bold text-gray-800">Rutvik B Shah</h1>
                  <p class="text-sm text-gray-600 mt-2">Software Developer @ Evodev, Montreal CA </p>
                </div>
                <div class="mt-4">
                  <h2 class="text-2xl font-semibold text-gray-700">About Me</h2><hr class="border-gray-400"/>
                  <div class="mt-2 mb-2">
                    <span class="text-base font-semibold"> Date of Birth: </span> <span class="text-sm">29 January 2000 (9:40 am )</span>
                  </div>
                  <div class="mt-2 mb-2">
                    <span class="text-base font-semibold"> Place of Birth: </span> <span class="text-sm">Pune, Maharashtra, India</span>
                  </div>
                  <div class="mt-2 mb-2">
                    <span class="text-base font-semibold"> Height: </span> <span class="text-sm"> 5"11</span>
                  </div>
                  <div class="mt-2 mb-2">
                    <span class="text-base font-semibold">Weight: </span> <span class="text-sm">  92 <small class="text-grey-200">kg</small></span>
                  </div>
                </div>
                <div class="mt-4">
                  <h2 class="text-2xl font-semibold text-gray-700">Contact Information</h2><hr class="border-gray-400" />
                  <ul class="space-y-4 mt-2 mb-2">
                    <li class="flex items-center">
                       <a href="mailto:rbshah0029@gmail.com" style="text-decoration: none; color: #000000;">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg> rbshah0029@gmail.com
</a>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <span>+1 9029898161</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span>Montreal, Canada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="mt-5 w-full">
              <h2 class="text-2xl font-semibold text-gray-700">Study</h2><hr class="border-gray-400"/>
              <table>
                <thead>
                  <tr>
                    <th class="px-4 py-2">Degree</th>
                    <th class="px-4 py-2">Institute</th>
                    <th class="px-4 py-2">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class=" px-4 py-2">B.E (Information and Technology)</td>
                    <td class=" px-4 py-2">Saffrony Institute of technology, India</td>
                    <td class=" px-4 py-2">2021</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Masters in Applied Computer Science</td>
                    <td class=" px-4 py-2">Dalhousie University, Canada</td>
                    <td class=" px-4 py-2">2023</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-5 w-full">
              <h2 class="text-2xl font-semibold text-gray-700">Family Information</h2>
              <hr class="border-gray-400"/>
              <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="bg-white p-4 rounded-lg shadow">
                    <p class="text-xl font-bold text-gray-600">Father</p>
                    <div class="mt-2">
                      <span class="text-lg text-gray-700">Bhavesh Shah</span>
                    </div>
                    <div class="flex items-center mt-2">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <span class="text-sm text-gray-600">+91 9824019610</span>
                    </div>
                  </div>
            
                  <div class="bg-white p-4 rounded-lg shadow">
                    <p class="text-xl font-bold text-gray-600">Mother</p>
                    <div class="mt-2">
                      <span class="text-lg text-gray-700">Harsha Shah</span>
                    </div>
                    <div class="flex items-center mt-2">
                      <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <span class="text-sm text-gray-600">+91 9429916388</span>
                    </div>
                  </div>
            
                  <div class="bg-white p-4 rounded-lg shadow">
                    <p class="text-xl font-bold text-gray-600">Sister</p>
                    <div class="mt-2">
                      <span class="text-lg text-gray-700">Hetvi Shah</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-2 mb-2">
                <h2 class="text-xl text-gry-700">Native:</h2><span class="text-sm"> Randheja, Gujarat</span>
              </div>
              <div class="mt-2 mb-2">
                <h2 class="text-xl text-gray-700">Samaj:</h2><span class="text-sm"> Shri Dashashrimali 42 Gyati Samaj</span>
              </div>
              <div class="mt-2 mb-2">
                <h2 class="text-xl  text-gray-700">Mosal:</h2><span class="text-sm"> Shri Kumarpal Ratilal Shah (Limbodra - Pune)</span>
              </div>
              
            </div>

            <div class="mt-5 w-full">
              <h2 class="text-xl font-semibold text-gray-700">Resi Address:</h2><hr class="border-gray-400"/><span class="text-sm"> 4, Harshiddi Apartment, HiraJain scoiety, Ramnagar, Samarmati Ahmedabad 380005</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
