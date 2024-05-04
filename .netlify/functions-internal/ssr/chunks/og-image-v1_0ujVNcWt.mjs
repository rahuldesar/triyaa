const ogImageV1 = new Proxy({"src":"/_astro/og-image-v1.BKzj_HEj.png","width":1200,"height":630,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rahuldesar/Developer/Workspace/lazana/triyaa/src/assets/images/og-image-v1.png";
							}
							
							return target[name];
						}
					});

export { ogImageV1 as default };
