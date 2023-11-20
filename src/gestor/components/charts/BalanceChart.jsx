import { useContext } from 'react';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { GestorContext } from '../../context';

Chart.register(Title, Tooltip, CategoryScale, LinearScale, ArcElement, Legend);

export function BalanceChart() {

    const {totalExpenses, totalEarnings} = useContext(GestorContext)

    const data = {
      labels: ['Expenses', 'Earnings'],
      datasets: [
        {
          label: 'MTotal Amount',
          data: [totalExpenses, totalEarnings],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
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
      <Doughnut data={data} options={options} className='mx-auto w-full lg:m-0'  />
  );
}

