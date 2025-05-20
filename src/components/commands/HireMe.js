import React, { useEffect, useState } from 'react';

const HireMe = () => {
  const [showAccess, setShowAccess] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowAccess(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <pre>
      {!showAccess ? 'Authenticating...\n[sudo] password for user: ********' : 'Access granted. Initiating hiring sequence...\n\n📧 Email: kanishkjain071993@gmail.com\n🔗 LinkedIn: https://linkedin.com/in/kanishk7\n🚀 Ready to lead your backend systems!'}
    </pre>
  );
};

export default HireMe;
