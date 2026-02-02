'use client';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { menuItems } from '@/data/menu';
import { siteConfig } from '@/lib/config';
import { formatPrice } from '@/lib/utils';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function MenuPDFDownload() {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(232, 106, 51); // blush-coral
    doc.text('Café Blush', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(158, 158, 158); // muted-gray
    doc.text('Menu', 105, 28, { align: 'center' });
    
    // Address & contact
    doc.setFontSize(10);
    doc.text(siteConfig.address.full, 105, 36, { align: 'center' });
    doc.text(`Call: ${siteConfig.phoneDisplay} | Hours: ${siteConfig.hours.displayOpen} - ${siteConfig.hours.displayClose}`, 105, 42, { align: 'center' });
    
    // Group items by category
    const categories = siteConfig.menuCategories;
    let yPosition = 55;
    
    categories.forEach((category) => {
      const categoryItems = menuItems.filter(item => item.category === category.id && item.available);
      
      if (categoryItems.length === 0) return;
      
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Category header
      doc.setFontSize(14);
      doc.setTextColor(232, 106, 51); // blush-coral
      doc.text(category.name, 14, yPosition);
      yPosition += 8;
      
      // Items table
      const tableData = categoryItems.map(item => [
        item.name,
        item.description,
        item.dietary.map(d => d === 'veg' ? 'V' : d === 'egg' ? 'E' : 'D').join(', '),
        formatPrice(item.price)
      ]);
      
      autoTable(doc, {
        startY: yPosition,
        head: [['Item', 'Description', 'Type', 'Price']],
        body: tableData,
        theme: 'striped',
        headStyles: {
          fillColor: [255, 204, 188], // soft-peach
          textColor: [93, 64, 55], // blush-brown
          fontStyle: 'bold'
        },
        styles: {
          fontSize: 9,
          cellPadding: 3,
        },
        columnStyles: {
          0: { cellWidth: 45 },
          1: { cellWidth: 80 },
          2: { cellWidth: 20 },
          3: { cellWidth: 25, halign: 'right' }
        },
      });
      
      yPosition = (doc as any).lastAutoTable.finalY + 15;
    });
    
    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(158, 158, 158);
      doc.text(
        'Prices subject to change; confirm on-site. V=Vegetarian, E=Contains Egg, D=Contains Dairy',
        105,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );
      doc.text(
        `Page ${i} of ${pageCount}`,
        doc.internal.pageSize.width - 20,
        doc.internal.pageSize.height - 10,
        { align: 'right' }
      );
    }
    
    // Save
    doc.save('cafe-blush-menu.pdf');
  };

  return (
    <button
      onClick={generatePDF}
      className="btn-outline flex items-center gap-2"
      aria-label="Download menu as PDF"
    >
      <ArrowDownTrayIcon className="w-5 h-5" />
      Download Menu PDF
    </button>
  );
}
