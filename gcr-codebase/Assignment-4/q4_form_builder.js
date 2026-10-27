// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
  constructor(containerId, fields, onSubmit) {
    this.container = document.getElementById(containerId);
    this.fields = fields;
    this.onSubmit = onSubmit; // callback that receives the collected data
    this.render();
  }

  // Turn a label into a safe field name: "Full Name" -> "full_name"
  static toName(label) {
    return label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  }

  // Escape text so labels cannot break the generated HTML
  static escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // Build the HTML for one field object, e.g. { type: "text", label: "Username" }
  fieldHtml(field) {
    const name = FormBuilder.toName(field.label);
    const label = FormBuilder.escapeHtml(field.label);

    if (field.type === "select") {
      const options = (field.options || [])
        .map((o) => `<option value="${FormBuilder.escapeHtml(o)}">${FormBuilder.escapeHtml(o)}</option>`)
        .join("");
      return `<label for="${name}">${label}</label><select id="${name}" name="${name}">${options}</select>`;
    }
    if (field.type === "textarea") {
      return `<label for="${name}">${label}</label><textarea id="${name}" name="${name}" rows="3"></textarea>`;
    }
    if (field.type === "checkbox") {
      return `<label><input type="checkbox" id="${name}" name="${name}" style="width:auto"> ${label}</label>`;
    }
    return `<label for="${name}">${label}</label><input type="${field.type}" id="${name}" name="${name}">`;
  }

  // Generate the whole form with innerHTML
  render() {
    this.container.innerHTML =
      `<form id="builtForm">${this.fields.map((f) => this.fieldHtml(f)).join("")}` +
      `<button type="submit">Submit</button></form>`;

    this.form = this.container.querySelector("#builtForm");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.onSubmit(this.getFormData());
    });
  }

  // Return every entered value as { fieldName: value }
  getFormData() {
    const data = {};
    this.fields.forEach((field) => {
      const name = FormBuilder.toName(field.label);
      const element = this.form.elements[name];
      data[name] = field.type === "checkbox" ? element.checked : element.value;
    });
    return data;
  }
}

// Field definitions passed to the builder
const fieldDefinitions = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "select", label: "Country", options: ["India", "USA", "UK"] },
  { type: "textarea", label: "About You" },
  { type: "checkbox", label: "Subscribe to newsletter" },
];

const output = document.getElementById("output");
new FormBuilder("formContainer", fieldDefinitions, (data) => {
  console.log("Form data:", data);
  output.textContent = JSON.stringify(data, null, 2);
});
