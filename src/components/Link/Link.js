import './Link.css';

function Link({ href, title }) {
  return <a className='link' href={href} target='_blank' rel='noreferrer' title={title}>{''}</a>;
}
export default Link;
