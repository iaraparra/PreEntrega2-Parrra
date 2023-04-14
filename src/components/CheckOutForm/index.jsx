import React, { useState } from "react";
import styles from "./CheckOutForm.module.css";

const CheckOutForm = () => {

  const [emailsCoinciden, setEmailsCoinciden] = useState(false)
  const [client, setClient] = useState({
		nombre: '',
		email: '',
		emailConfirm: '',
		telefono: '',
	})

  useEffect(() => {
		confirmar()
	}, [client])

	const confirmar = () => {
		if (
			client.email === client.emailConfirm &&
			client.email !== '' &&
			client.emailConfirm !== '' &&
			client.nombre !== '' &&
			client.telefono !== ''
		) {
			setEmailsCoinciden(true)
		} else {
			setEmailsCoinciden(false)
		}
	}

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Nombre" value={client.name} className={styles.input} />
      <input type="text" placeholder="Apellido" value={client.lastName} className={styles.input} />
      <input type="text" placeholder="Telefono" value={client.phone} className={styles.input} />
      <input type="text" placeholder="Email" value={client.email} className={styles.input} />
      <input type="text" placeholder="Confirmar Email" className={styles.input} />

    </div>
  );
};

export default CheckOutForm;
