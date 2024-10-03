const displayContent = (content) => {
    dis.value += content;
  };
  
  const showResult = () => {
    try {
      dis.value = eval(dis.value);
    } catch (error) {
      dis.value = 'Error';
    }
  };
  
  const clearAll = () => {
    dis.value = '';
  };
  
  const remove = () => {
    dis.value = dis.value.slice(0, -1);
  };
  
  const add = () => {
    dis.value += '+';
  };
  
  const subtract = () => {
    dis.value += '-';
  };
  
  const multiply = () => {
    dis.value += '*';
  };
  
  const divide = () => {
    dis.value += '/';
  };
  
  const calculatePercentage = () => {
    try {
      const expression = dis.value;
      const result = eval(expression) / 100;
      dis.value = result.toString();
    } catch (error) {
      dis.value = 'Error';
    }
  };