import { motion } from 'framer-motion';
import AnimatedSection from './ReactBits/AnimatedSection';
import AnimatedText from './ReactBits/AnimatedText';
import React from 'react';

const InfoSections = () => {
  return (
    <>
      {/* Help section with left-rounded shape */}
      {React.createElement(
        AnimatedSection,
        {
          direction: "left" as const,
          className: "relative mb-16"
        },
        <motion.div 
          className="bg-[#360B4A] text-white p-12 rounded-l-full w-3/4 ml-auto"
          whileHover={{ 
            x: -10,
            boxShadow: "10px 10px 25px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatedText text="HOW CAN TASKIFY HELP YOU?" type="word" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-2">
              lorem loremsfdjofj sidfjoif sifjoisdfjoі fhidfjoid 
              fiojdofi fiiosfj f hiofhior fhoihfoihrf oir foirf
            </p>
            <p>
              lorem loremsfdjofj sidfjoif sifjoisdfjoі fhidfjoid 
              fiojdofi fiiosfj f hiofhior fhoihfoihrf oir foirf
            </p>
          </motion.div>
        </motion.div>
      )}
      
      {/* Features section with right-rounded shape */}
      {React.createElement(
        AnimatedSection,
        {
          direction: "right" as const,
          className: "relative mb-16"
        },
        <motion.div 
          className="bg-[#360B4A] text-white p-12 rounded-r-full w-3/4 text-right"
          whileHover={{ 
            x: 10,
            boxShadow: "-10px 10px 25px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatedText text="FEATURES OF TASKIFY" type="word" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-2">
              lorem loremsfdjofj sidfjoif sifjoisdfjoі fhidfjoid 
              fiojdofi fiiosfj f hiofhior fhoihfoihrf oir foirf
            </p>
            <p>
              lorem loremsfdjofj sidfjoif sifjoisdfjoі fhidfjoid 
              fiojdofi fiiosfj f hiofhior fhoihfoihrf oir foirf
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default InfoSections; 