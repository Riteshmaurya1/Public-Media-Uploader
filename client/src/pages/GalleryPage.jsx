import { useEffect, useState } from "react";
import { getAllMedia, deleteMedia } from "../services/api";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MediaCard from "../components/MediaCard"; // 👈 Make sure this is correct path

const GalleryPage = () => {
  const [mediaList, setMediaList] = useState([]);

  const fetchMedia = async () => {
    try {
      const res = await getAllMedia();
      setMediaList(res.data);
    } catch (err) {
      toast.error("Failed to fetch media");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMedia(id);
      setMediaList((prev) => prev.filter((item) => item._id !== id));
      toast.success("Media deleted!");
    } catch (err) {
      toast.error("Failed to delete media");
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6 text-center pt-10">
        📁 Media Gallery
      </h1>

      {mediaList.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5M3 5l9 9 9-9"
            />
          </svg>
          <p className="text-lg text-zinc-400">
            No photos or videos found. Upload your first memory!
          </p>
          <Link
            to="/upload"
            className="bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
          >
            Upload Now
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence>
            {mediaList.map((item) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <MediaCard
                  url={item.url}
                  type={item.type.includes("video") ? "video" : "image"}
                  onDelete={() => handleDelete(item._id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
