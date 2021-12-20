describe('Visit home page.', () => {
  it('Render all devices.', () => {
    cy.visit('/devices');
    cy.get('.device-card-title').each(($els, index, $list) => {
      expect($list[0].textContent?.trim()).equal('Device 1');
      expect($list[1].textContent?.trim()).equal('Device 2');
      expect($list[2].textContent?.trim()).equal('Device 3');
      expect($list[3].textContent?.trim()).equal('Device 4');
      expect($list[4].textContent?.trim()).equal('Device 5');
      expect($list[5].textContent?.trim()).equal('Device 6');
      expect($list[6].textContent?.trim()).equal('Device 7');
      expect($list[7].textContent?.trim()).equal('Device 8');
    });
  });
});
