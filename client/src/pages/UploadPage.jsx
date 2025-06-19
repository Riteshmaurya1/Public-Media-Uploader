// // import React, { useState } from "react";
// // import { uploadMedia } from "../services/api";
// // import { Toaster, toast } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom";

// // const UploadPage = () => {
// //   const [file, setFile] = useState(null);
// //   const [mediaURL, setMediaURL] = useState("");
// //   const [progress, setProgress] = useState(0);
// //   const [isUploaded, setIsUploaded] = useState(false);
// //   const [isUploading, setIsUploading] = useState(false); // 🔄 spinner state
// //   const navigate = useNavigate();

// //   const handleFileDrop = (e) => {
// //     e.preventDefault();
// //     const droppedFile = e.dataTransfer.files[0];
// //     if (droppedFile) {
// //       setFile(droppedFile);
// //       setIsUploaded(false);
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (!file) return toast.error("Please select a file");
// //     setIsUploading(true);

// //     const formData = new FormData();
// //     formData.append("file", file);

// //     try {
// //       const res = await uploadMedia(formData, (event) => {
// //         setProgress(Math.round((event.loaded * 100) / event.total));
// //       });
// //       setMediaURL(res.data.url);
// //       toast.success("Uploaded successfully!");
// //       setIsUploaded(true);
// //       setProgress(0);
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Upload failed");
// //     } finally {
// //       setIsUploading(false);
// //     }
// //   };

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //     setIsUploaded(false);
// //     setMediaURL("");
// //   };

// //   return (
// //     <div
// //       onDrop={handleFileDrop}
// //       onDragOver={(e) => e.preventDefault()}
// //       className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16"
// //     >
// //       <Toaster />

// //       <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
// //         <h2 className="text-2xl font-semibold text-center mb-6 text-white">
// //           🚀 Upload Photo or Video
// //         </h2>

// //         <div className="mb-4">
// //           <input
// //             type="file"
// //             onChange={handleFileChange}
// //             className="block w-full text-sm text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 transition"
// //           />
// //         </div>

// //         {progress > 0 && (
// //           <div className="mb-4 w-full">
// //             <div className="relative w-full bg-zinc-800 rounded-lg overflow-hidden h-4 sm:h-3">
// //               <div
// //                 className="absolute top-0 left-0 h-full bg-indigo-600 transition-all duration-300"
// //                 style={{ width: `${progress}%` }}
// //               />
// //               <span className="absolute inset-0 flex items-center justify-center text-[11px] sm:text-xs text-white font-medium">
// //                 {progress}%
// //               </span>
// //             </div>
// //           </div>
// //         )}

// //         <button
// //           onClick={handleUpload}
// //           disabled={!file || isUploaded || isUploading}
// //           className={`w-full transition text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2
// //             ${!file || isUploaded
// //               ? "bg-gray-600 cursor-not-allowed"
// //               : "bg-indigo-600 hover:bg-indigo-500"
// //             }`}
// //         >
// //           {isUploading ? (
// //             <>
// //               <svg
// //                 className="animate-spin h-5 w-5 text-white"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <circle
// //                   className="opacity-25"
// //                   cx="12"
// //                   cy="12"
// //                   r="10"
// //                   stroke="currentColor"
// //                   strokeWidth="4"
// //                 />
// //                 <path
// //                   className="opacity-75"
// //                   fill="currentColor"
// //                   d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
// //                 />
// //               </svg>
// //               Uploading...
// //             </>
// //           ) : isUploaded ? "Uploaded" : "Upload"}
// //         </button>

// //         {mediaURL && (
// //           <div className="mt-6">
// //             <h4 className="text-lg font-medium text-zinc-300 mb-2">Uploaded:</h4>
// //             <div className="rounded-lg overflow-hidden shadow-md">
// //               {mediaURL.includes("video") ? (
// //                 <video src={mediaURL} controls className="w-full rounded-lg" />
// //               ) : (
// //                 <img src={mediaURL} alt="Uploaded media" className="w-full rounded-lg" />
// //               )}
// //             </div>
// //             <a
// //               href={mediaURL}
// //               download
// //               className="block mt-3 text-sm text-indigo-400 hover:underline"
// //             >
// //               Download Media
// //             </a>
// //             <div className="mt-3 bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
// //               ✅ File uploaded successfully!
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UploadPage;


// import React, { useState } from "react";
// import { uploadMedia } from "../services/api";
// import { Toaster, toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const UploadPage = () => {
//   const [file, setFile] = useState(null);
//   const [mediaURL, setMediaURL] = useState("");
//   const [progress, setProgress] = useState(0);
//   const [isUploaded, setIsUploaded] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const navigate = useNavigate();

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     const droppedFile = e.dataTransfer.files[0];
//     if (droppedFile) {
//       setFile(droppedFile);
//       setIsUploaded(false);
//       setMediaURL("");
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return toast.error("Please select a file");
//     setIsUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await uploadMedia(formData, (event) => {
//         setProgress(Math.round((event.loaded * 100) / event.total));
//       });
//       setMediaURL(res.data.url);
//       toast.success("Uploaded successfully!");
//       setIsUploaded(true);
//       setProgress(0);
//     } catch (error) {
//       console.error(error);
//       toast.error("Upload failed");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setIsUploaded(false);
//     setMediaURL("");
//   };

//   return (
//     <div
//       onDrop={handleFileDrop}
//       onDragOver={(e) => e.preventDefault()}
//       className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16"
//     >
//       <Toaster />

//       <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
//         <h2 className="text-2xl font-semibold text-center mb-6 text-white">
//           📤 Drag & Drop to Upload
//         </h2>

//         {/* Drop Area */}
//         <label
//           htmlFor="file-upload"
//           className="w-full border-2 border-dashed border-indigo-600 hover:border-indigo-400 transition text-center px-6 py-12 rounded-xl bg-zinc-800 cursor-pointer flex flex-col items-center justify-center mb-6"
//         >
//           <svg
//             className="w-12 h-12 mb-3 text-indigo-400"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 16V4m0 0L8 8m4-4l4 4M4 16v4h16v-4M4 16l4-4m12 4l-4-4"
//             />
//           </svg>
//           <span className="text-sm text-zinc-400">
//             Click or drag & drop file here
//           </span>
//           <input
//             id="file-upload"
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//         </label>

//         {/* Progress Bar */}
//         {progress > 0 && (
//           <div className="mb-4 w-full">
//             <div className="relative w-full bg-zinc-800 rounded-lg overflow-hidden h-4 sm:h-3">
//               <div
//                 className="absolute top-0 left-0 h-full bg-indigo-600 transition-all duration-300"
//                 style={{ width: `${progress}%` }}
//               />
//               <span className="absolute inset-0 flex items-center justify-center text-[11px] sm:text-xs text-white font-medium">
//                 {progress}%
//               </span>
//             </div>
//           </div>
//         )}

//         {/* Upload Button */}
//         <button
//           onClick={handleUpload}
//           disabled={!file || isUploaded || isUploading}
//           className={`w-full transition text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2
//             ${!file || isUploaded
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-indigo-600 hover:bg-indigo-500"
//             }`}
//         >
//           {isUploading ? (
//             <>
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
//                 />
//               </svg>
//               Uploading...
//             </>
//           ) : isUploaded ? "Uploaded" : "Upload"}
//         </button>

//         {/* Media Preview */}
//         {mediaURL && (
//           <div className="mt-6">
//             <h4 className="text-lg font-medium text-zinc-300 mb-2">Uploaded:</h4>
//             <div className="rounded-lg overflow-hidden shadow-md">
//               {mediaURL.includes("video") ? (
//                 <video src={mediaURL} controls className="w-full rounded-lg" />
//               ) : (
//                 <img src={mediaURL} alt="Uploaded media" className="w-full rounded-lg" />
//               )}
//             </div>
//             <a
//               href={mediaURL}
//               download
//               className="block mt-3 text-sm text-indigo-400 hover:underline"
//             >
//               Download Media
//             </a>
//             <div className="mt-3 bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
//               ✅ File uploaded successfully!
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadPage;


import React, { useState } from "react";
import { uploadMedia } from "../services/api";
import { Toaster, toast } from "react-hot-toast";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [mediaURL, setMediaURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleUpload = async () => {
    if (!file) return toast.error("Please select a file");
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await uploadMedia(formData, (event) => {
        setProgress(Math.round((event.loaded * 100) / event.total));
      });
      setMediaURL(res.data.url);
      toast.success("Uploaded successfully!");
      setIsUploaded(true);
      setProgress(0);
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setIsUploaded(false);
    setMediaURL("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setIsUploaded(false);
      setMediaURL("");
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <Toaster />

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          📤 Upload Photo or Video
        </h2>

        {/* Drop Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-full border-2 border-dashed rounded-xl transition-all duration-200 bg-zinc-800 px-6 py-12 flex flex-col items-center justify-center mb-6 cursor-pointer ${
            isDragging ? "border-indigo-400" : "border-indigo-600"
          }`}
        >
          <svg
            className="w-12 h-12 mb-3 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16V4m0 0L8 8m4-4l4 4M4 16v4h16v-4M4 16l4-4m12 4l-4-4"
            />
          </svg>
          <span className="text-sm text-zinc-400 text-center">
            Drag & drop your file here or{" "}
            <label className="text-indigo-400 underline cursor-pointer">
              click to browse
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </span>
        </div>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="mb-4 w-full">
            <div className="relative w-full bg-zinc-800 rounded-lg overflow-hidden h-4">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[11px] text-white font-medium">
                {progress}%
              </span>
            </div>
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!file || isUploaded || isUploading}
          className={`w-full transition text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 ${
            !file || isUploaded
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-500"
          }`}
        >
          {isUploading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                />
              </svg>
              Uploading...
            </>
          ) : isUploaded ? "Uploaded" : "Upload"}
        </button>

        {/* Media Preview */}
        {mediaURL && (
          <div className="mt-6">
            <h4 className="text-lg font-medium text-zinc-300 mb-2">Uploaded:</h4>
            <div className="rounded-lg overflow-hidden shadow-md">
              {mediaURL.includes("video") ? (
                <video src={mediaURL} controls className="w-full rounded-lg" />
              ) : (
                <img
                  src={mediaURL}
                  alt="Uploaded media"
                  className="w-full rounded-lg"
                />
              )}
            </div>
            <a
              href={mediaURL}
              download
              className="block mt-3 text-sm text-indigo-400 hover:underline"
            >
              Download Media
            </a>
            <div className="mt-3 bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
              ✅ File uploaded successfully!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
