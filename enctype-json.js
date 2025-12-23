for (const form of document.querySelectorAll(`form[enctype="application/json"]`)) {
	// form: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
	form.addEventListener("submit", async (event) => {
		event.preventDefault()

		const formData = {}
		for (const element of form.elements) {
			const name = element.name
			let value = element.value
			if (element.type === "number") {
				value = parseInt(value)
			}

			if (element.name === "") {
				continue
			}

			if (name in formData) {
				if (!Array.isArray(formData[name])) {
					formData[name] = [formData[name]]
				}
				formData[name].push(value)
			} else {
				formData[name] = value
			}
		}

		console.log(formData)
		
		await fetch(form.action, {
			method: form.method,
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		})
	})
}
