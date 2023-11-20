import { useContext } from "react"
import { Chart, CategoryScale, LinearScale, Title, Tooltip, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'; 
import { GestorContext } from "../../context"
import { useSelector } from "react-redux";

Chart.register(Title, Tooltip, CategoryScale, LinearScale, ArcElement, Legend);

export const EarningsChart = () => {
  const {earnings} = useSelector(state => state.gestor)
  const {earningsCategories: categories, totalEarnings} = useContext(GestorContext)

  // Función para generar colores aleatorios en formato rgba
  function generateRandomColors() {
      const colors = [];
      for (let i = 0; i < categories.length; i++) {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          colors.push(`rgba(${r}, ${g}, ${b}, 0.7)`);
      }
      return colors;
    }

  // Genera colores aleatorios para las categorías
  const categoryColors = generateRandomColors();


  const data = {
      labels: earnings?.map(earning => earning.category),
      datasets: [
        {
          label: 'Total Amount',
          data: earnings?.map(earning => earning.amount),
          backgroundColor: categoryColors,
          borderColor: categoryColors,
          borderWidth: 1,
        },
      ],
      redraw: true
    };

    const options = {
      maintainAspectRatio: false, // Desactiva la relación de aspecto
      responsive: true, // Permite que el gráfico sea responsivo
      aspectRatio: 1, // Establece la relación de aspecto deseada
    }

  return (
    <div className="my-4 lg:flex-1"> 
      {totalEarnings === 0
        ? (
          <div className="font-semibold text-white border text-center md:text-base m-auto p-2 rounded-md bg-red-600">
            <span>There are no earnings entered.</span>
          </div>
        )
        : (
            <Doughnut data={data} options={options}  className='mx-auto lg:m-0 w-full' />
        ) 
      }
    </div>
  );
}
