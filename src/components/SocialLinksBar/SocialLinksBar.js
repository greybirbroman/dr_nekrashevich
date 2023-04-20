import { motion } from 'framer-motion';
import SocialLink from '../SocialLink/SocialLink';
import { socialLinksList } from '../../utils/const';

function SocialLinksBar({ className }) {
  return (
    <>
      <motion.ul
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={`${className}`}
      >
        {socialLinksList.map((link) => (
          <SocialLink
            key={link.id}
            link={link.link}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </motion.ul>
    </>
  );
}
export default SocialLinksBar;
