import React, { useState, useEffect } from "react";

interface Service {
  id: number;
  title: string;
  cost: number;
  time: string;
  clicks: number;
  peopleBought: number;
  revenue: number;
}

interface ModalProps {
  service: Service | null;
  onClose: () => void;
  onSave: (service: Service) => void;
}

const Modal: React.FC<ModalProps> = ({ service, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState(0);
  const [time, setTime] = useState("");
  const [clicks, setClicks] = useState(0);
  const [peopleBought, setPeopleBought] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    if (service) {
      setTitle(service.title);
      setCost(service.cost);
      setTime(service.time);
      setClicks(service.clicks);
      setPeopleBought(service.peopleBought);
      setRevenue(service.revenue);
    }
  }, [service]);

  const handleSubmit = () => {
    onSave({
      id: service ? service.id : Date.now(),
      title,
      cost,
      time,
      clicks,
      peopleBought,
      revenue,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">
          {service ? "Edit Service" : "Create Service"}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Cost</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Time</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Clicks</label>
            <input
              type="number"
              value={clicks}
              onChange={(e) => setClicks(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              No of People Bought
            </label>
            <input
              type="number"
              value={peopleBought}
              onChange={(e) => setPeopleBought(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Revenue
            </label>
            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
