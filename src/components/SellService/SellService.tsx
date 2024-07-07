import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

interface Service {
  id: number;
  title: string;
  cost: number;
  time: string;
  clicks: number;
  peopleBought: number;
  revenue: number;
}

const SellService = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  // Function to create or edit a service
  const handleCreateService = (service: Service) => {
    if (editingService) {
      setServices(
        services.map((s) => (s.id === editingService.id ? service : s))
      );
    } else {
      setServices([...services, { ...service, id: services.length + 1 }]);
    }
    setIsModalOpen(false);
    setEditingService(null);
  };

  // Function to edit a service
  const handleEditService = (service: Service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  // Function to delete a service
  const handleDeleteService = (id: number) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="p-8">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Create Service
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Cost</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Clicks</th>
              <th className="py-2 px-4 border-b">No of People Bought</th>
              <th className="py-2 px-4 border-b">Revenue</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td className="py-2 px-4 border-b">{service.title}</td>
                <td className="py-2 px-4 border-b">₹{service.cost}</td>
                <td className="py-2 px-4 border-b">{service.time}</td>
                <td className="py-2 px-4 border-b">{service.clicks}</td>
                <td className="py-2 px-4 border-b">{service.peopleBought}</td>
                <td className="py-2 px-4 border-b">₹{service.revenue}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEditService(service)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modal
          service={editingService}
          onClose={() => {
            setIsModalOpen(false);
            setEditingService(null);
          }}
          onSave={handleCreateService} // Pass the function directly
        />
      )}
    </div>
  );
};

export default SellService;
