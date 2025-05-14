const PearAndBlueberries = new Proxy({"src":"/_astro/pear-and-blueberyy.BtHdxzeX.avif","width":406,"height":580,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/assets/illustrations/blue/pear-and-blueberyy.avif";
							}
							
							return target[name];
						}
					});

export { PearAndBlueberries as P };
