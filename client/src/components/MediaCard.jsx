import React, { useState } from "react";
import { Download, X, Trash2, Expand } from "lucide-react";
import { toast } from "react-hot-toast";

const MediaCard = ({ url, type, onDelete }) => {
  const isVideo = type === "video";
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    const forceDownloadURL = url.replace("/upload/", "/upload/fl_attachment/");
    const a = document.createElement("a");
    a.href = forceDownloadURL;
    a.download = `media-${Date.now()}.${isVideo ? "mp4" : "jpg"}`;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePreviewOpen = () => {
    if (!isVideo) {
      setIsPreviewOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Card */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition w-full max-w-md relative group">
        {/* Preview Icon Bottom-Right */}
        {!isVideo && (
          <button
            onClick={handlePreviewOpen}
            className="absolute bottom-3 right-3 z-10 bg-black/60 p-2 rounded-full text-white hover:bg-black/80 opacity-100 transition"
            title="Fullscreen"
          >
            <Expand size={22} />
          </button>
        )}

        {/* Media Display */}
        <div className="aspect-[16/10]">
          {isVideo ? (
            <video src={url} controls className="w-full h-full object-cover" />
          ) : (
            <img
              src={url}
              alt="media"
              className="w-full h-full object-cover"
              onDoubleClick={handlePreviewOpen}
            />
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-row md:flex-row sm:flex-row items-center sm:w-fit justify-between gap-3 px-5 py-4">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-violet-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-violet-500 transition w-full sm:w-fit md:w-fit"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Download</span>
          </button>
          {onDelete && (
            <button
              onClick={onDelete}
              className="flex items-center justify-center gap-2 bg-violet-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-violet-500 transition w-full sm:w-fit md:w-fit"
            >
              <Trash2 size={18} />
              <span className="hidden sm:inline">Delete</span>
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 overflow-auto">
          <button
            onClick={handlePreviewClose}
            className="absolute top-5 right-5 text-white hover:text-red-400 transition"
          >
            <X size={36} />
          </button>
          <img
            src={url}
            alt="Full preview"
            className="max-h-[90vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
            onClick={handlePreviewClose}
          />
        </div>
      )}
    </>
  );
};

export default MediaCard;
