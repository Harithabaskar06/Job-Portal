import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import generatePDF from "../components/ApplicationFormPdf"; 

const skillsOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'CSS', label: 'CSS' },
    { value: 'HTML', label: 'HTML' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'PHP', label: 'PHP' },
    { value: 'SQL', label: 'SQL' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Go', label: 'Go' },
    { value: 'Django', label: 'Django' },
    { value: 'Flask', label: 'Flask' },
    { value: 'GraphQL', label: 'GraphQL' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Scala', label: 'Scala' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Elixir', label: 'Elixir' },
    { value: 'C#', label: 'C#' },
    { value: 'Shell', label: 'Shell' },
    { value: 'Perl', label: 'Perl' },
    { value: 'R', label: 'R' },
    { value: 'MATLAB', label: 'MATLAB' },
    { value: 'SAS', label: 'SAS' },
    { value: 'COBOL', label: 'COBOL' },
    { value: 'Assembly', label: 'Assembly' },
    { value: 'Haskell', label: 'Haskell' },
    { value: 'Lua', label: 'Lua' },
  ];

const ApplicationForm = ({ job, onApply }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [pdfFile, setPdfFile] = useState(null); 

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', skills: [] }}
      onSubmit={(values) => {
        const applicationDetails = {
            ...values,
            aboutMe: editorState.getCurrentContent().getPlainText(),
            pdfFile: pdfFile,
        };
        generatePDF(applicationDetails);
        onApply(job.id); 
    }}
    
    >
      {({ setFieldValue }) => (
        <Form>
          <Field name="firstName" placeholder="First Name" required />
          <Field name="lastName" placeholder="Last Name" required />
          <Field name="email" type="email" placeholder="Email" required />
          <Select
            isMulti
            name="skills"
            options={skillsOptions}
            onChange={selectedOptions => setFieldValue('skills', selectedOptions.map(option => option.value))}
            placeholder="Select skills..."
          />
          <br/>
         <div>
          <input 
            type="file" 
            accept="application/pdf" 
            onChange={handleFileChange} 
            required 
          /></div>
          <button type="submit">Submit Application</button>
        </Form>
      )}
    </Formik>
  );
};

export default ApplicationForm;
