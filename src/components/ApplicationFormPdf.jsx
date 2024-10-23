import jsPDF from 'jspdf';

const generatePDF = (applicationDetails) => {
  const doc = new jsPDF();
  doc.text(`Application Details`, 10, 10);
  doc.text(`First Name: ${applicationDetails.firstName}`, 10, 20);
  doc.text(`Last Name: ${applicationDetails.lastName}`, 10, 30);
  doc.text(`Email: ${applicationDetails.email}`, 10, 40);
  doc.text(`Skills: ${applicationDetails.skills.join(', ')}`, 10, 50);
  doc.save('application.pdf');
};

export default generatePDF;
