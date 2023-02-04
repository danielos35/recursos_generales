
/**
 * 
 * SE UTILIZA PARA DESPLAZARSE AL TO
 * 
 * 
 */

export const moverAlTop = () => {
  const html:HTMLElement | null = document.getElementById('modal-component');
  html!.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
}
