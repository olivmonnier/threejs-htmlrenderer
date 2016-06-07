function Html3d() {
  this.camera;
  this.scene;
  this.renderer;
}
Html3d.prototype.init = function(camera) {
  this.scene = new THREE.Scene();
  this.camera = camera;
  var target = $('#html3DView').clone();
  var pages = target.find('.page');
  var self = this;

  pages.each(function() {
      var el = new THREE.CSS3DObject($.parseHTML($(this)[0].outerHTML)[0]);

      el.position.x = $(this).data('positionX') || 0;
      el.position.y = $(this).data('positionY') || 0;
      el.position.z = $(this).data('positionZ') || 0;
      el.rotation.x = $(this).data('rotationX') || 0;
      el.rotation.y = $(this).data('rotationY') || 0;
      el.rotation.z = $(this).data('rotationZ') || 0;

      self.scene.add(el);
  });

  //CSS3D Renderer
  this.renderer = new THREE.CSS3DRenderer();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.renderer.domElement.style.position = 'absolute';
  this.renderer.domElement.style.top = 0;
  document.getElementById('view').appendChild(this.renderer.domElement);
}

Html3d.prototype.render = function() {
  this.renderer.render(this.scene, this.camera);
}
